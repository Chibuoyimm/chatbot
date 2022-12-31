const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABAHzTE8oZAC46SHxTYxnPJmUkNi7WgjleuAAh3mkjhqA1yxodMBm1j5oweoWVxSYOSqWaXGOO8xcN3idHhO71dRXCd2RwTKNrXJsrDgTEZCfBL04mLeWo1flsw5Tu54mhqZCqdhQ1vGwZBsQFj37aOwJf5H5bnLtq7WTOV6hQG3kFHh4ZAlKICymTNTdcFAwZDZD',
    Meta_WA_SenderPhoneNumberId: '102956889354682',
    Meta_WA_wabaId: '101596156159101',
    Meta_WA_VerifyToken: 'Chiboy17',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAVfrZCioSZBABAHzTE8oZAC46SHxTYxnPJmUkNi7WgjleuAAh3mkjhqA1yxodMBm1j5oweoWVxSYOSqWaXGOO8xcN3idHhO71dRXCd2RwTKNrXJsrDgTEZCfBL04mLeWo1flsw5Tu54mhqZCqdhQ1vGwZBsQFj37aOwJf5H5bnLtq7WTOV6hQG3kFHh4ZAlKICymTNTdcFAwZDZD',
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