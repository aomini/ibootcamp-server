var express = require("express");
var app = express();
var router = express.Router();
router.get("/test", function (_, res) {
    res.send("this is a test");
});
app.use("/", router);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("your server is running");
});
