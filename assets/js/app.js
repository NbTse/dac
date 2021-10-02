window.$ = window.jQuery = require("jquery");
require("popper.js");
require("bootstrap");
const AOS = require("aos");

// App
require("./typing");
require("./contributors");
require("./timeline");
require("./video-modal");
require("./preloader");
require("./dropdown");
require("./navbar");
// require('./video');
require("./menu");
require("./numbers-effects");
require("./gt-timer");

//

AOS.init();
