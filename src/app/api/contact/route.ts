import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, data } = body;

        // Create a Nodemailer transporter using Strato SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.strato.de',
            port: 465,
            secure: true, // true for port 465, false for port 587
            auth: {
                user: process.env.STRATO_EMAIL,
                pass: process.env.STRATO_PASSWORD,
            },
        });

        let subject = '';
        let html = '';

        if (type === 'mentor') {
            subject = `Neue Mentor-Bewerbung: ${data.name}`;
            html = `
        <h2>Neue Mentor-Bewerbung</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Spezialisierung:</strong> ${data.specialization}</p>
        <p><strong>Erfahrung:</strong> ${data.experience}</p>
        <p><strong>Motivation:</strong> ${data.motivation}</p>
      `;
        } else if (type === 'student') {
            subject = `Neue Schüler-Anfrage: ${data.name}`;
            html = `
        <h2>Neue Schüler-Anfrage</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Fach:</strong> ${data.subject}</p>
        <p><strong>Stufe:</strong> ${data.level}</p>
        <p><strong>Nachricht:</strong> ${data.message}</p>
      `;
        } else {
            return NextResponse.json({ error: 'Invalid submission type' }, { status: 400 });
        }

        // Set up email options
        const mailOptions = {
            from: process.env.STRATO_EMAIL, // Must be your Strato email address
            to: process.env.STRATO_EMAIL, // You can change this if you want it sent to a different address
            replyTo: data.email, // So you can reply directly to the person
            subject: subject,
            html: html,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Internal server error while sending email' },
            { status: 500 }
        );
    }
}
