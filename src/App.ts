const express = require("express");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const path = require("path");
const app = express();
const router = express.Router();

router.get("/test", (_, res) => {
  res.send("this is a test");
});

router.get("/send-mail", (_: never, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  console.log(__dirname);
  const msg = {
    to: ["rak3sh.shrestha@gmail.com", "s.p.shuvo1996@gmail.com"], // replace these with your email addresses
    from: "Shivaji <rak3sh.shrestha@gmail.com>",
    subject: "Invitation email",
    text: "Fresh donuts are out of the oven. Get them while they’re hot!",
    html: fs.readFileSync(path.join(__dirname, "../", "email.html")).toString(),
  };

  // const csvData = fs
  //   .readFileSync(path.join(__dirname, "../", "mails.csv"))
  //   .toString();
  // const lines = csvData.trim().split("\n");
  // const [_, ...students] = lines;
  // const studentsArray = students.map((student) => {
  //   const [name, email] = student.replace(/\s/g, "").split(",");
  //   return { name, email };
  // });
  sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("emails sent successfully!");
    })
    .catch((error: Error) => {
      console.log(error);
    });
});

app.use("/", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("your server is running");
});
