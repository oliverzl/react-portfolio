import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = (req, res) => {
	try {
		const name = req.body.contactState.name;
		const email = req.body.contactState.email;
		const text = req.body.contactState.message;

		let transporter = nodemailer.createTransport({
			host: "smtp-mail.outlook.com",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.mail, // generated ethereal user
				pass: process.env.mailpass, // generated ethereal password
			},
		});

		const options = {
			from: "portfoliosender@outlook.com",
			to: "oliverchong1234@gmail.com",
			subject: "portfolio email",
			text: "Hello, I am " + name + ", my email is " + email + ". TEXT: " + text,
		};
		//uncomment to send mail
		transporter.sendMail(options, (err, info) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(`Sent  ${info.response}`);
		});
		res.status(200).send("email sent");
	} catch (error) {
		console.log(error);
	}
};
