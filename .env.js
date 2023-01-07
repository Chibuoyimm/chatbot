const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABAKYjZCqOgZB8A3Rs6iUGuZB28Cb2BM4GMhA1N1MOS5mVAC46EiBpjqMqZCXa6iOBDrHFhWuq3yQeaZAoDhghpt7f6RpKBIenpAZB4iZBvX1JqOqskbu8AmcJR9Azf93SY1elPEpqk3tqoZA8pUpLRGNfK7n6hADJUQxZC8B2uxAm56cuYRGw54N2O18KvVTd7fgZDZD',
    Meta_WA_SenderPhoneNumberId: '102956889354682',
    Meta_WA_wabaId: '101596156159101',
    Meta_WA_VerifyToken: 'Chiboy17',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABAKYjZCqOgZB8A3Rs6iUGuZB28Cb2BM4GMhA1N1MOS5mVAC46EiBpjqMqZCXa6iOBDrHFhWuq3yQeaZAoDhghpt7f6RpKBIenpAZB4iZBvX1JqOqskbu8AmcJR9Azf93SY1elPEpqk3tqoZA8pUpLRGNfK7n6hADJUQxZC8B2uxAm56cuYRGw54N2O18KvVTd7fgZDZD',
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