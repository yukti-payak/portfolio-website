// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const body = await request.json();
    const { name, email, message } = body;


    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or 'SendGrid', 'Outlook', etc.
        auth: {
            user: process.env.EMAIL_USER,    
            pass: process.env.EMAIL_PASS, 
        },
    });

    // 2. Define the email content
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'payakyukti2003@gmail.com', // Where you want to receive it
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}