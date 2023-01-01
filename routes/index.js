'use strict';
const router = require('express').Router();

const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');
const Whatsapp = new WhatsappCloudAPI({
    accessToken: process.env.Meta_WA_accessToken,
    senderPhoneNumberId: process.env.Meta_WA_SenderPhoneNumberId,
    WABA_ID: process.env.Meta_WA_wabaId
});

const EcommerceStore = require('./../utils/ecommerce_store.js');
let Store = new EcommerceStore();
const CustomerSession = new Map();


router.get('/meta_wa_callbackurl', (req, res) => {
    try {
        console.log('GET: Someone is pinging me!');

        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];

        if (
            mode &&
            token &&
            mode === 'subscribe' &&
            process.env.Meta_WA_VerifyToken === token
        ) {
            return res.status(200).send(challenge);
        } else {
            return res.sendStatus(403);
        }
    } catch (error) {
        console.error({error})
        return res.sendStatus(500);
    }
});

router.post('/meta_wa_callbackurl', async (req, res) => {
    try {

        let data = Whatsapp.parseMessage(req.body);

        if (data?.isMessage) {
            let incomingMessage = data.message;
            let recipientPhone = incomingMessage.from.phone; // extract the phone number of sender
            let recipientName = incomingMessage.from.name;
            let typeOfMsg = incomingMessage.type; // extract the type of message (some are text, others are images, others are responses to buttons etc...)
            let message_id = incomingMessage.message_id; // extract the message id
            if (typeOfMsg === 'text_message') {
                await Whatsapp.sendSimpleButtons({
                    message: `Hey ${recipientName}, \nYou are speaking to a chatbot right now.\nWhat do you want to do next?`,
                    recipientPhone: recipientPhone,
                    listOfButtons: [
                        {
                            title: 'View some products',
                            id: 'see_categories',
                        },
                        {
                            title: 'Speak to a human',
                            id: 'speak_to_human',
                        },
                    ],
                });
            }

            if (typeOfMsg === 'simple_button_message') {
                let button_id = incomingMessage.button_reply.id;

                if (button_id === 'speak_to_human') {
                    await Whatsapp.sendText({
                        recipientPhone: recipientPhone,
                        message: `Arguably, chatbots are faster than humans.\nCall my human with the below details:`,
                    });

                    await Whatsapp.sendContact({
                        recipientPhone: recipientPhone,
                        contact_profile: {
                            addresses: [
                                {
                                    city: 'Nairobi',
                                    country: 'Kenya',
                                },
                            ],
                            name: {
                                first_name: 'Sayo',
                                last_name: 'Chiboy',
                            },
                            org: {
                                company: 'Mom-N-Pop Shop',
                            },
                            phones: [
                                {
                                    phone: '+234 90 3446 2164',
                                },
                                                    {
                                    phone: '+234 70 2613 1931',
                                },
                            ],
                        },
                    });
                }
            };
        }

        console.log('POST: Someone is pinging me!');
        return res.sendStatus(200);
    } catch (error) {
                console.error({error})
        return res.sendStatus(500);
    }
});
module.exports = router;