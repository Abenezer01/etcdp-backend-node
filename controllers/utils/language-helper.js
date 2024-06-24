const usrData = require("../../utils/userDataFromToken");


const i18n = require("i18n");

const self = {};

self.getCustomizedLabel = async(req, res, str) => {
  let usr = await usrData.userData(req, res);
  const lang = usr.lang ? usr.lang : "am";
  i18n.configure({
    locales: ["en","am", "es"],
    directory: __dirname + "/../../locales",
    defaultLocale: lang,
    queryParameter: "lang",
    cookie: "locale",
    updateFiles: true, // set this to true if you want i18n to create locale files for missing translations
  });

  return i18n .__(str);
  
};

module.exports = self;



