const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABANLhPiY36KHLBobRRWScD4ukSktR8h0sf7SGeUZC9GeDP9m43QVNZBNB8tu2c6S2yon3IqAOaaCh354HMXEoQDvCTY4OPBB7mKJtitGZBpkJ0qrSRno8ZBJC9BmpJNjnyYDPkEWaggQv9f7ZCIJEEZCk8pmRDZCX5seQZCfYJoBCgEPFIxZBXEJK2FtdM1JtyKQZDZD',
    Meta_WA_SenderPhoneNumberId: '102956889354682',
    Meta_WA_wabaId: '101596156159101',
    Meta_WA_VerifyToken: 'Chiboy17',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABANLhPiY36KHLBobRRWScD4ukSktR8h0sf7SGeUZC9GeDP9m43QVNZBNB8tu2c6S2yon3IqAOaaCh354HMXEoQDvCTY4OPBB7mKJtitGZBpkJ0qrSRno8ZBJC9BmpJNjnyYDPkEWaggQv9f7ZCIJEEZCk8pmRDZCX5seQZCfYJoBCgEPFIxZBXEJK2FtdM1JtyKQZDZD',
    Meta_WA_SenderPhoneNumberId: '102956889354682',
    Meta_WA_wabaId: '101596156159101',
    Meta_WA_VerifyToken: 'Chiboy17',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};