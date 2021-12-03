async function sendEmail(html){
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: "v4jmrnv4pzwwqva7@ethereal.email",
    //         pass: "AVqRb8cYyBuya3kUP8"
    //     }
    // })
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.fnsusa.com",
    //     port: 25,
    //     secure: false,
    //     auth: {
    //         user: "sungyoung.lee",
    //         pass: "q1w2e3!!"
    //     }
    // })
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "scanner.van.nc3@gmail.com",
            pass: "pantos100%"
        }
    });

    let info = await transporter.sendMail({
        from: `"[${employeeId}] ${name} 👻" <foo@example.com>`,
        to: "sungyoung.lee@pantos.ca",
        subject: `Device Information [${employeeId}] ${name}`,
        html,
    })

    // console.log("Preview URL : %s", nodemailer.getTestMessageUrl(info));
    console.log("Done!");
    clearInterval(twirlTimer);
}