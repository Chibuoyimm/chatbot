const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABAF3CZAnMO7mfKZCioCEPxrY6BzC6ZAE1kF8jaj6JYTzrozKTLmZAtv9nKyO9I14THIoaTz7UUfNseKi7ztV9d4CTgWa8uODShxG62A1x8egCy9bAyN3xJImWQsWVJm0Fr3QzchhuJL4jco6oZASTDa1iOkeNiubqCG0BfeZBIOY62QY0BAMkZAyuLYfW5ZBlXgZDZD',
    Meta_WA_SenderPhoneNumberId: '102956889354682',
    Meta_WA_wabaId: '101596156159101',
    Meta_WA_VerifyToken: 'Chiboy17',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABAF3CZAnMO7mfKZCioCEPxrY6BzC6ZAE1kF8jaj6JYTzrozKTLmZAtv9nKyO9I14THIoaTz7UUfNseKi7ztV9d4CTgWa8uODShxG62A1x8egCy9bAyN3xJImWQsWVJm0Fr3QzchhuJL4jco6oZASTDa1iOkeNiubqCG0BfeZBIOY62QY0BAMkZAyuLYfW5ZBlXgZDZD',
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