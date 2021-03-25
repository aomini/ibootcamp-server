const express = require("express");

const app = express();
const router = express.Router();

router.get("/test", (_, res) => {
  res.send("this is a test");
});
app.use("/", router);

const port = 5000;
app.listen(port, () => {
  console.log("your server is running");
});
