
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client/client";
import twilio from 'twilio'
import mail from "@sendgrid/mail"

mail.setApiKey(process.env.SENDGRID_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false }); // user가 없다면
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  console.log("api/enter페이지 토큰값은?", payload)
  
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          }
        }
      }
    }
  })
  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body:`Your login token is ${payload}`
    })
    return res.json({
      ok:true,
    }) */
  } else if (email) {
    /* const email = await mail.sendMultiple({
      from: "sand8594@naver.com",
      to: "sand8594@naver.com",
      subject: "Your Carrot Market Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    }) */
    console.log(req.body)
  }
   return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);

