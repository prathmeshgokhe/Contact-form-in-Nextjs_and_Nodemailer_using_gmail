export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    service: "gmail",
    host: "gmail.com",
    auth: {
      user: "xyz@gmail.com", //Enter your email id
      pass: "password", //Enter your password

      // To generate the password of your gmail,
      // Step 1. Go to your gmail account
      // Step 2. Go to manage your google account
      // Step 3. Go to security section
      // Step 4. Search for 2-step Verification
      // Step 5. Enter your password
      // Step 6. Enter app name whatever you want
      // Step 7. You will get the 16 digit secret key
      // Step 8. Enter the secret key in your password and you are good to go.
    },
    // secure: true,
  });
  const mailData = {
    from: "xyz@gmail.com", //Set the senders email here
    to: "abc@gmail.com", //Set the recievers email here
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("Email send failed with error:", err);
    else console.log(info);
  });
  res.status(200);
}
