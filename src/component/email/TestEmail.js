import React from "react";

import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "stokho83@gmail.com",
    pass: "s9136892",
  },
});

var mailOptions = {
  from: "stokho83@gmail.com",
  to: "susantokho@hotmail.co.id",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

function TestEmail() {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "stokho83@gmail.com",
      pass: "s9136892",
    },
  });

  var mailOptions = {
    from: "stokho83@gmail.com",
    to: "susantokho@hotmail.co.id",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  const sendEmail = () => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  };
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <h2>Test Email</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="body">
                <button onClick={sendEmail}>Send Email</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestEmail;
