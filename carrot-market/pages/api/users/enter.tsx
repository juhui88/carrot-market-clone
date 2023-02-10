
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };
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

  return res.status(200).end();
}

export default withHandler("POST", handler);

