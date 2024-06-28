"use strict";

const nodemailer = require("nodemailer");

/**
 * message controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::message.message", ({ strapi }) => ({
  async create(ctx) {
    const { name, email, subject, message } = ctx.request.body.data;

    // Saving message at Strapi
    const newMessage = await strapi
      .service("api::message.message")
      .create({ data: { name, email, subject, message } });

    // setting transport for Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email layout
    const mailOptions = {
      from: `${name} <${process.env.EMAIL_USER}>`, // Setting Sender's name
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}: ${subject}`,
      html: `
        <p><strong>From:</strong> <a href="mailto:${email}">${name}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Additional information:</p>
        <ul>
          <li>Time: ${new Date().toLocaleString()}</li>
          <li>IP Address: ${ctx.request.ip}</li>
        </ul>
      `,
    };

    // Sending Email
    await transporter.sendMail(mailOptions);

    return newMessage;
  },
}));
