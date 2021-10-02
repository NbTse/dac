const express = require("express");

const expressGoogleAnalytics = require("express-google-analytics");

const templateService = require("./services/template.service");
const sessionService = require("./services/sesssion.service");
const controllers = require("./controllers/index");

const app = express();
const port = process.env.PORT || 3000;

const analytics = expressGoogleAnalytics("UA-122948014-1");
app.use(analytics);

app.use(express.static("public"));
sessionService(app);
templateService(app);
controllers(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
