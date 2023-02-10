
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
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

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
  /* if (email) { 
    user = await client.user.findUnique({ // 유저가 있으면
      where: {
        email,
      }
    })
    if (user) console.log("found it.")
    if (!user) {
      console.log("Did not found. Will create")
      user = await client.user.create({ // 유저가 없으면
        data: {
          name: "Anonymous",
          email,
          }
        })
    }
  }
  if (phone) { 
    user = await client.user.findUnique({ // 유저가 있으면
      where: {
        phone: +phone,
      }
    })
    if (user) console.log("found it.")
    if (!user) {
      console.log("Did not found. Will create")
      user = await client.user.create({ // 유저가 없으면
        data: {
          name: "Anonymous",
          phone: +phone,
          }
        })
    }
  } */
  
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body:`Your login token is ${payload}`
    })
    return res.json({
      ok:true,
    })
  } else if (email) {
    const email = await mail.sendMultiple({
      from: "sand8594@naver.com",
      to: "sand8594@naver.com",
      subject: "Your Carrot Market Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    })
    
  }
  
}

export default withHandler("POST", handler);

