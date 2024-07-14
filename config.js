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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUkvb3VWbjdyUXJZRnh2VzJjcUFkL1lHZzVpSjJlOTNpRDVZQitnVm4xUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1E1WVdrZHhMTE5wVG4wNDJFRjhkZ3RJZExKOUUxWko1dkI2Qk5TYWYwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxREpyVFpkVDZIZ2w5Vm04eGZqWGFIWmJJclhRSG9seUJyK0IrSG92aG1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WThGSkF2MEYxeGU1ZFVKZlhTNDhHTWh1QWIxb2JKRDcrNmt0QVRHeXo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGL2RjYkVUdVlpV3cxYkJlaThuY2FYaWk3dE1BOFNWMlByVjlJUUM3V0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxzZDdIejE2MDlTQmNHOUVBQ0IzRlNRYmlydXRzOTU2K0MzR0VoMHJjdzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZtenpCY202WkFPY2Q3REM5azVWWXN0cE9kQlNlZXpacElXV0JtMENYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVNmUHRldFA1aGFJMHNNSHlQa2ZGanFLZHVORkhwdm1VT1RKbmtoYzhVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU2SEpJaWE5eEF0MkxIVTd6eW91MDlERHVTcmJKNGIyYzdvRFc1MC93UU05ZFdQUzlWazQwUWMzOWlkcEtlVnZlR0haaXdiU1MyMzFkRVJaY0pFMGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiIvQlBwSlJPY002bUh2VUszVXdpK1BiY3FmUks5TEdIZy9IWGtzdGUzQXFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIySzFsdXJXNVNtbVZueUhoTHhYQ3FRIiwicGhvbmVJZCI6IjU4MDkzN2E1LTdmYjEtNGU1MS1hOTI0LTdiOWI1MDg3YzY3MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoS0VDanJ2dFl0UFBhSll1TktiSGo0N3lTVEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05zVlRDRmZoeWkyTGxZZlU4SzliM3FIOWdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBES1FROE5OIiwibWUiOnsiaWQiOiIyMzQ5MDEwODk1NDc3OjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT1p6cWNIRU0rbDBMUUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJackprdjlzN1ppaHVQZUxCWmNUSVlld2Zkdm9WWGphS2lrUjdxdWtqUVNjPSIsImFjY291bnRTaWduYXR1cmUiOiI3am1kWTFVTURsd3ZOSFAzM0c5aC9wOVBucFpDN09LcmFzWXRjNU1PeXQ3N0gvcWlZSVhXNFJVNUE1eUd4UDlpVWpkQy8wSkdFQncybE11Y1hhRXlDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTk9WOXRHMTJGVS84NFlqeEFqWitpSUYvbnVqOUF0cVlmN2h3dlJPemExUG1wb1JqM0F5ZXpSMERjNmtLdlhmZGpyVGtjd25UYTRzV25CNExYUUJvanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDEwODk1NDc3OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldheVpML2JPMllvYmozaXdXWEV5R0hzSDNiNkZWNDJpb3BFZTZycEkwRW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA5ODAxODl9"
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
