const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
  PORT: "9000",
  Meta_WA_accessToken:
    "EAAVfrZCioSZBABAP25YmR4OvKd76MrqfI6v5H4X12Ms7f6W0ZAWNoXFtcvwh1ni165Xm9dBi0giIr0rtbMzINoi2AUTtXYZADf1gXXsRlHW6w2qXqFi96dQtrZAoH9lveZCCJomvE3KP4ihIBsYfnTg0lCq1Hn7JQWuapOvUPr9lKaMDv43mAc2aEuXDA1DNYRU8ZBs42JhdQZDZD",
  Meta_WA_SenderPhoneNumberId: "102956889354682",
  Meta_WA_wabaId: "101596156159101",
  Meta_WA_VerifyToken: "Chiboy17",
};

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: "9000",
  Meta_WA_accessToken:
    "EAAVfrZCioSZBABAP25YmR4OvKd76MrqfI6v5H4X12Ms7f6W0ZAWNoXFtcvwh1ni165Xm9dBi0giIr0rtbMzINoi2AUTtXYZADf1gXXsRlHW6w2qXqFi96dQtrZAoH9lveZCCJomvE3KP4ihIBsYfnTg0lCq1Hn7JQWuapOvUPr9lKaMDv43mAc2aEuXDA1DNYRU8ZBs42JhdQZDZD",
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
