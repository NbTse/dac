const available = ["en", "mn", "pt-br", "zh-hans", "ar", "es", "ru", "it"];

const sections = ["main", "contributors", "countries"];

const data = {};

available.forEach((lang) => {
  data[lang] = { lang };
  sections.forEach((section) => {
    data[lang][section] = require(`./${lang}/${section}.json`);
  });
});

module.exports = { data, available };
