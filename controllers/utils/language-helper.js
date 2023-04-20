const i18n = require('i18n');

const getCustomizedLabel = async(req, res) => {
  const lang = 'am'
  i18n.configure({
    locales: ['en','am', 'es'],
    directory: __dirname + '/../../locales',
    defaultLocale: lang ? lang : 'en',
    queryParameter: 'lang',
    cookie: 'locale',
    updateFiles: true, // set this to true if you want i18n to create locale files for missing translations
  });
}



