const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
  PORT: "9000",
  Meta_WA_accessToken:
    "EAAVfrZCioSZBABAAMtTHyk9Av2aSMvGPd02G8ZBEQMS7bjoyEh2DtjZBLNwJC0kfSASHUliNj17nBdcHsaFu7ONYqCAaXMT7LZBgt0sgXYel5obOoD2ZAoorne19d5ZBNXjWpmSci0JxSXz9mBys2MZBi7qK5GHmjaR5W9nJPVMZB2gIdAj7njdLN7qHjMXbiA28a8rFyaII54wZDZD",
  Meta_WA_SenderPhoneNumberId: "102956889354682",
  Meta_WA_wabaId: "101596156159101",
  Meta_WA_VerifyToken: "Chiboy17",
};

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: "9000",
  Meta_WA_accessToken:
    "EAAVfrZCioSZBABAAMtTHyk9Av2aSMvGPd02G8ZBEQMS7bjoyEh2DtjZBLNwJC0kfSASHUliNj17nBdcHsaFu7ONYqCAaXMT7LZBgt0sgXYel5obOoD2ZAoorne19d5ZBNXjWpmSci0JxSXz9mBys2MZBi7qK5GHmjaR5W9nJPVMZB2gIdAj7njdLN7qHjMXbiA28a8rFyaII54wZDZD",
  Meta_WA_SenderPhoneNumberId: "102956889354682",
  Meta_WA_wabaId: "101596156159101",
  Meta_WA_VerifyToken: "Chiboy17",
};

const fallback = {
  ...process.env,
  NODE_ENV: undefined,
};

module.exports = (environment) => {
  console.log(`Execution environment selected is: "${environment}"`);
  if (environment === "production") {
    return production;
  } else if (environment === "development") {
    return development;
  } else {
    return fallback;
  }
};
