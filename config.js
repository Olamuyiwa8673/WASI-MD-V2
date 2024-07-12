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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUh4bWVTbEdlY1NSZTFidUJuUDdBbXBqTnVLclJhNjNPMytHQS9jQkQzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3k1b1JOUitsZkFBL2d4Y25zSThRS1JoSzRuSkx0V2ZVT1I5ZHBPN0tTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQVBjT2FZK1g2WjFJS1hUa0szMXN1ZDZlR3F2QS9NZkRVQ1V0UlZpSVcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTldCQXFiRDFrSm1uZFJyS2syU0NHUGhLei90V2tqQWcvenpiUXA2clVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCNkhGeGVWV2YvRDNMR001OFROeUw4V3RJZ21zZ3VkWnlrY3NaYmhIV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZNZFlqR2wxWnp1UytqVGEyQUl3Y2RuUHRncGpjTjVuMkJtR1lxTndVRm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1JWEE2SGs1NVVtMG1wWk80VnBsaVNGeGRXWFdoYjNyc09SWXBVRkVITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lXV204WmRBWDV0aUhibmpXb1c5M2tzcFI1RjlCYkoxTm9idGNJNExFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk0dXJFRFJOL3J4M2gwUkorYTdUbWpsbXV3dlFkbUIzRWtIMVNOdmE0MGFPTmx5VFRUcjRSUllVVmxveFlmQUxZMDBjL1BRZXNVOXk1YmtVV1VMTEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJ0NkNZZUtNbEdoemozc004NWo0WWI5TVVxbEhGK0tndXRUd0JkcWYwSCtJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmeFRzSmxUb1JKZUNqdGFwZklEeThBIiwicGhvbmVJZCI6ImFjODUxMzA5LTNiOGUtNDI1My05ZWM3LWNmOThjMGM3YzdmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5a3d1TVJDa1doYWZsQ0hCQmo3blgxbGw5ZjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0pVcWRSbXFsaEczVFJmTzNUc3Bzb2doeUFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMxRU1aVjc2IiwibWUiOnsiaWQiOiIyMzQ5MDEwODk1NDc3OjQ5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMT1p6cWNIRUluR3dyUUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJackprdjlzN1ppaHVQZUxCWmNUSVlld2Zkdm9WWGphS2lrUjdxdWtqUVNjPSIsImFjY291bnRTaWduYXR1cmUiOiI5N2QyYkY3QWFMZCtqWmJuS0V3b2xWRzcvVVZFR0N3SkpHTXJXRCt0QXZuNi83aXgzWk1HRzBYMi96cWpldFdSZG5aLzFuRUNkNUxVVzVvK3FreElDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOUJoRVJ1aXMrTFMwSjZXTmlRbWhvYks5TlloaFdiNVQ0VU5qNURpU3V2NjlicFNiaUlzVW5ZcjEzT2VDMVVBeDY5RVN6YzFYaEowM0Y4SHB2dlFCQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDEwODk1NDc3OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldheVpML2JPMllvYmozaXdXWEV5R0hzSDNiNkZWNDJpb3BFZTZycEkwRW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3NTQ5NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSTFYIn0="
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
