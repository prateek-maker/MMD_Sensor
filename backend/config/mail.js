import { createTransport } from "nodemailer";
import AWS from "@aws-sdk/client-ses";

export const sendMail = async (payload) => {
	const { AWS_ACCESS_KEY_ID, AWS_SECRET_KEY, AWS_REGION } = process.env;
	const ses = new AWS.SES({ credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_KEY }, region: AWS_REGION });
	let transporter = createTransport({
		SES: { ses, aws: AWS },
	});
	return transporter.sendMail(payload);
};
