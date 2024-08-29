//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848,255752593977";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848,255752593977";
global.owner = process.env.OWNER_NUMBER || "2349036687873";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID |"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVLVEdWU0E0alBSWXl4eWN5STF3N2FMS254czBuZHF6SG1xMUZjTWkzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1gwSEhBSDRsdEZjYTVWWWhQbFVVY1VTOGpoMU00WWVMZklLQ1IvQ1hsdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQmlkRWRYalJ0U0wyVVJSV3pkNWR5UUI2WUQrOS9MRFdRWTJRV2IrVjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNkVobDZjb1JnZFdwcDhWSndRQWFIMXNNN3I3WnNFck8vaEpCWXZrMjJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOUC85dUdMV1dmaENXa3RUZDJVSGhJOXBjbWJ4MkZ0UG5hcndkOXp5VTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHNHFIeXlLZE9SVmV2bFI4aytvU0doKytyajZVOHpqTEcvK2hxN0dTazg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZOYmVHMDFKRFg3UkVkWWR6QUcvRzJCSStadU1iVWE3OGFJWWo5NjgwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTMzS2xibk4zTk9mRlFtaEZYZ0JTYmJWdjQ1QVAvUzJHbFFqeEdNblR6MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJvbk1GK2F2N2huQ0Ric0Y1Rm5RUm5Ra2ZFencwVFV5WGJmOTR5TEtHK2kzS1YvcUNtekgzSVB0MlRhcFRhMXdVMSs5b3JyNDdVSVNENnBsTVFRdmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6Imp4TUNNcmVNMnVna04rK0tQZFcrU3dSeUNVc2I3U2NTUWRSeWd6K0lmVmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxzTXlGNmhrUS1xU0Z0dDJUM1Fjd0EiLCJwaG9uZUlkIjoiYWJhZTFiNGUtMDUxMy00NTdjLWJhNTQtM2QyZjM4OWVmNzFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJnR0pFZm8xaUFEUUd4ZS9CQ09vS0NYWnBURT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZjJpTnFWVWlvNndFYVc2ZTJCVkdZcnhKWDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU01DWkdNR0QiLCJtZSI6eyJpZCI6IjIzNDkwMzY2ODc4NzM6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xidXVNSUNFSzdwd0xZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxHdjcwSXlCTFNVYVNzTHN1L2ZWcXFTbDVJYlczbVFXR0ZwUWpOWC9SblU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZPSWUxY3pleUZzMWNKZjVGQjM1SldKUUxxb0wxQ3hmcFNna3IxT1hTNCt6WVZwWVBib2VrZ0pZMDhCZEtwSVlEZkhEeFh3Mi83Rk95YzNrMGpLd0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQK0hPMHg0UDNCS1dPN0s2ZklhL0dkN0xhOUt4TU1ZTEc4ZHc5T29nakFHMVZNYlVsbFFrdndGcktvWDBaZHF0K3h5dGZqeVhBWnh3SFZ6T2piMDZpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMzY2ODc4NzM6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlJyKzlDTWdTMGxHa3JDN0x2MzFhcWtwZVNHMXQ1a0ZoaGFVSXpWLzBaMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDkyMTAxOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNalEifQ=="|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlqVjRPeEY2M0ROL1BENzBML2l3cGRLYTFvSGsvY0RVR1NhZFNmTGJWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXg1TExtVkc0YUZORXNySXZ0MGVTeGUralVNUkpDWW12SlZ1TWVvOUoyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTGdsNy9jclJZTm5YYzlxWjdndUlUYlRqaTJJa2U2UmwrOU50VmpVODNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkeTl0QTM5UGNUb0UvZU5CM0xBc0xjanJHKzFPajd1b3RFLzlGSXI1NERVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGWjBVWDl4UC9JbUowWlJnVnlXVnVnSXFlQVl0UTZycUpGdDZTOWVnbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJYbzE0WTdad1djeG1JbkJWRDcwZEgwVGhITFFGWE9IMnpYR0JqaERoakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlDb095ei9YWkZtREp0ckJ4a3JCWXZsUzNHaXhQOW1qVkRXZlN2YUJHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUsyQVZDQ1ozSFlYTlR5bXJVTStOc1d3ZXdES1AyVkIxbFI2MVFPNWJXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhaUnBsNXZKcklyUU04b2Fmd1FRUCtMMFZQc0VodkhibHFnMUJ6UTlmRHRwUWVTZkVjNnd2cnhiclpMckpON2lDUmwxTWNTZ01vczFjQnBJT2NBWGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6Imd1dUtXa1NNdHFXNDRTRk9VZzVlVWIxcGlwUUozRVpOZVV5Y3BWcUppY009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFKT0JJbThxVG5paEJOSUtKRU40N1EiLCJwaG9uZUlkIjoiYzk3MjNlOWUtMjBmYi00MmNkLWIxYWItZTFmOTAyN2I2Zjc2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM1d0FyTHdIOXVJR29seUZscUtrYWp2V3FDZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZDVxRHl1Qjl1TkVNS2pld1U3Zk9QUUt0RU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUNQNktFSDUiLCJtZSI6eyJpZCI6IjI1NTc1MjU5Mzk3NzozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQR29uTVFCRU9IMjZyVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSeVRxMVp4bllhdmJaVzNYV25iZmcwUWpnVkk4K2NlY1NVWnlJY2RrTWlnPSIsImFjY291bnRTaWduYXR1cmUiOiJKMEQ5SjhNbW4yaUNnalducnR6SnV1VjBuUnE1bllhQ2JBM0RhZ2RQVC9oVVFtRWhFb3pHLzNJcC9vNGd0RHU2a2hDd2FLSzB5NXplbTlOdWl2UitBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieVM2QWVTY2ZLLzAwNGhDMGdHUDVBenBkcUNLeUs3QmFhbnBhVzgzN1F3N0liQlRsSzBXZHZTQzhTd2J5bGdmTUY1Rkd0SEtRakU4ZWFranozUS9SaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTI1OTM5Nzc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVY2s2dFdjWjJHcjIyVnQxMXAyMzRORUk0RlNQUG5IbkVsR2NpSEhaRElvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNTEzNzEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUN0SiJ9"
module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || "X",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
