//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2349010895477@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/CkXxZAzjHSrBvjzpKQFmys";
global.website = process.env.GURL || "https://chat.whatsapp.com/CkXxZAzjHSrBvjzpKQFmys";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "2349010895477";
global.sudo = process.env.SUDO || "2349010895477";
global.owner = process.env.OWNER_NUMBER || "2349010895477";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVAveHFpd1BTaE5KUEZZbmIwUGcvekVocXFNTDVTZUIxUDEwcUUwbU9IUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1lxMUtCMGJhZXN2V3dLZ2ZOTThXL3lOQytwUnBwQmplY0duSVp2TnJnMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTEJ5dDhqekc3c0N5djdPV0E4VU1lOWdUNVdHeHVjU3lXVzJKOU8rTUZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjVG9qb1VPYnBpMzQwbVE5cDJtSGlERnhzQUtOZEp2TmV4SHhsNVdzc1R3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDSHZLdmdTZkFxVTRiM0c2ZWNyempERXNsL3A5VUZMVW93SXdLMVBURnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxzQjIwb0cxSlBnYm4vWVFNYmM2NzcrdFlVRXBERmd2MnRhMGhnS0RyMHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU52eTJJSVZGNTRsZlpIWSs4b295M0x2MUxBUldDS2Q5SkVBU1NVNjVrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2NrZ0hQQk9UVm04Z3B1T1VVSlpYR1FHRThtUkprTGw2S1ExbjRWUkp4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhtcGtGMUlieDV6cWtSZDJadDdXd1hsM01XanJWSURNZmkvUlFEbWhJZUVhZzRUaU03VnFZQlJIQlRPaG9WZHp4L1RwaTNqRjludytkWlJIaFRlbWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiI3QTJoRm5WeDlSd2tPa3ArcXFOdE5WRlhKdSsrMUkzZWdaTVhjOE4xWlkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxS3dmV3V0QVJMLWNLUEVfQlNtTWp3IiwicGhvbmVJZCI6ImEwZTc4MDFkLWMxZDEtNDYxZi1hN2YyLTFiNDkyMWNkZmM0ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHWFhkQUlER0VMSnk1Z2NaR2Zpakx5ZUdQSkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3VObGJMM0E1eEpWWnBYMDhqZ3BiMXpLSUtRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVMU0w3NDFNIiwibWUiOnsiaWQiOiIyMzQ5MDEwODk1NDc3OjUxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT1p6cWNIRUtmWndyUUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJackprdjlzN1ppaHVQZUxCWmNUSVlld2Zkdm9WWGphS2lrUjdxdWtqUVNjPSIsImFjY291bnRTaWduYXR1cmUiOiJpQ3RRS1gzQ3l0SDZJQjBCVDJPaEt0M0Fwb2U5a3ltREdYbVppWUNSZnN5UGg3MjBoOVRQL2drQlJyWUE5RGM2WDZkODkwV0ovdVNGK280aWJRUkNEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaXhlYkljRkJTcS9qT3pUMTJUZ1dFeWErK2lxU2YxSUMzU3NCN0g3ZGI0aVh4ZTZjVmQ2MjlheEZzeVZvVGp3SWNwS3Q5dk1PVGcrdCtaRnhaSDY1aHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDEwODk1NDc3OjUxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldheVpML2JPMllvYmozaXdXWEV5R0hzSDNiNkZWNDJpb3BFZTZycEkwRW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3NTc0MjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTFYIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼",
  author: process.env.PACK_AUTHER || "𝙱𝚄𝙼𝙱𝚄𝙼",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "🤪𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼🤪",
  ownername: process.env.OWNER_NAME || "🤪𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼🤪",
  errorChat: process.env.ERROR_CHAT || "2349010895477",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
