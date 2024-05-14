import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

export async function POST(req: Request) {
    const errorCode = 500;
    const successCode = 200;

    const formData = await req.json();

    try {
        await sendgrid.send({
            to: 'karl.krilov@barkowskibar.dk', // Your email where you'll receive emails
            from: noreply@torsten.dk, // Your website email address here
            replyTo: ${formData.email},
            subject: ${formData.subject},
            html: `
                <div>Mail from:<br />${formData.name} \<<a href="mailto:${formData.email}">${formData.email}</a>\></div>
                <br /><br />
                <div>Message:<br />${formData.message}</div>
            `,
        });
    } catch (error: any) {
        return new Response(${error.message}, {
            status: error.statusCode || errorCode,
        });
    }

    return new Response('Mail sent succesfully', { status: successCode });
}