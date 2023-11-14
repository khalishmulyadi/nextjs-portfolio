import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { sender, subject, message } = req.body;

    // Set up the Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: sender,
      to: 'khalishmulyadi21@gmail.com',
      subject: subject,
      text: `You got an email from ${sender} with the following messages:
      ${message}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}