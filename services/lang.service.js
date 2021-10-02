const {data, available} = require('../lang/index');

var local = { available };

function middleware (req, res, next) {
    var { lang } = req.params;
        
    if(langIsValid(lang)) {
        req.session.savedLang = lang;
    } else {
        req.session.savedLang = req.session.savedLang || getFallbackLang();
    }

    if (lang && req.session.savedLang != lang) {
        return res.redirect(req.session.savedLang);
    }

    next();
}

function getData (lang) {
    return {...data[lang], available};
}

function langIsValid(lang) {
    return lang && local.available.indexOf(lang) != -1;
}

function getFallbackLang() {
    return local.available[0];
}

module.exports = {
    middleware,
    getData
}