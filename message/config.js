'use strict';
const fs = require("fs");

const Creator = "kavee P";
const watermark = "WM dari kavee";
const namaOwner = "kavee";
const NomorOwner = ['94775792013'];
const namaBot = "kavee assistant";
const author = "kavee P";
const packname = "Stick me";
const thumbnail = fs.readFileSync("./media/image/thumbnail.png");
const fakeImage = fs.readFileSync("./media/image/fake.png");

const autoread = false;
const autocomposing = true;
const autorecording = false;
const p_multiprefix = true;
const p_nonprefix = false;
const p_prefix = '/';

const browserDescription = {
  set_name: "kavee P",
  set_browser: "Chrome"
}

const response = {
    "wait" : "Mohon Tunggu Sebentar!",
    "success" : "Selesai!",
    "ErroR" : "Terjadi Kesalah!",
    "invalidLink" : "Link tidak valid/error"
     }
    
const only = {
        "OwnerBot" : "Command Hanya Untuk Owner Bot!!",
        "OwnerGroup" : "Command Hanya Untuk Owner Group!!",
        "inGroup" : "Command Hanya Bisa Diguna Di Dalam Group!!",
        "AdminGroup" : "Command Hanya Untuk Admin Group!!",
        "BAdmin" : "Maaf Bot Harus Jadi Admin Group!!"
           }


module.exports = {
      Creator,
      namaOwner,
      namaBot,
      NomorOwner,
      author,
      packname,
      thumbnail,
      fakeImage,
      autoread,
      autocomposing,
      autorecording,
      p_multiprefix,
      p_nonprefix,
      p_prefix,
      browserDescription,
      response,
      only
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update config`);
  delete require.cache[file];
  require(file);
});
