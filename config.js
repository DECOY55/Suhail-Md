const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://snax:snax@cluster0.l6h70tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349115110490" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_30_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDM5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNSNFFIN1RMcUtEbEF4WUJZYVhDNWJFK01icVpDR3VVWk5Bb0lnUHlua3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlMVllnV2JFUnhlTGtRazhZcHdvN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjAzNmVlMmItOGIwOS00NzgzLThkZDUtODRkOGIwNTVmM2IyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDEzMCxcbiAgICAgIDEyNyxcbiAgICAgIDEwLFxuICAgICAgNCxcbiAgICAgIDk5LFxuICAgICAgMTY2LFxuICAgICAgMTA2LFxuICAgICAgOTMsXG4gICAgICAxNDMsXG4gICAgICAxNDMsXG4gICAgICAxMTMsXG4gICAgICAxODgsXG4gICAgICAwLFxuICAgICAgODUsXG4gICAgICAyMzMsXG4gICAgICAxMjAsXG4gICAgICAxMjQsXG4gICAgICAyNTQsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMTAxLFxuICAgICAgNjIsXG4gICAgICAxMzMsXG4gICAgICAzMSxcbiAgICAgIDEyNyxcbiAgICAgIDE0LFxuICAgICAgNDksXG4gICAgICAxMjcsXG4gICAgICA0MyxcbiAgICAgIDUxLFxuICAgICAgMTUyLFxuICAgICAgNCxcbiAgICAgIDEwNSxcbiAgICAgIDEyMyxcbiAgICAgIDE1OSxcbiAgICAgIDEyNyxcbiAgICAgIDc2LFxuICAgICAgMTQ2LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkEyWVQzTldGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTE1MTEwNDkwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MDIwNDE2MDk1ODU5Nzo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImRldmZyb21PaGlvXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHI1Nm44UWpwYS9zUVlZQmlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJUnFhSDBmeHBuY0FEZml5c3NKS2MwL1JCdUVOTzRRaXRPTTRoSDVnckZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw4NHI0Q0wyQkN5azVkSGFDbCtTeElQRmNWVm1DcG9qOGk5QzRmVWU0aWEyRWRqVm9PSDJhdjRoSzh4a2RpWXFWUlIzY0ZJQk1Pc2tNRkRWdFVNd0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFvZzVyeUN1TDRKb2xKRFA2Q3oxampmYnF0VVlrU2ViclpJSkpNN2ZHNCtSQkpGdmo1TW1rL0c1eGpXZVJpdGNNZ2NiZmM4YjRTbFVCMUMzWjlMMENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTUxMTA0OTA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ0MDgyMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQalVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBqVS5qc29uIjogIntcImtleURhdGFcIjpcInJQRUlsdDhDWkwzM204a0lDZGtra1lNYzVRMTIraW4yNGRSSW9rMUI3bHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY4MDkwNTU0LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ0MDgxOTUwMDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
