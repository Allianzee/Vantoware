import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { cashAppUser, amountNeeded, discordUser } = req.body;

  if (!cashAppUser || !amountNeeded || !discordUser) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'xdplayzyt7889@gmail.com',
    subject: 'New Payment Info from VantoWare Site',
    text: `
      Cash App User: ${cashAppUser}
      Amount Needed: ${amountNeeded}
      Buyer Discord Username: ${discordUser}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
