import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/client/client";
import { withApiSession } from "@libs/server/withSession";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    }
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: {
      payload : token,
    },
    // include : {user:true} 유저정보 다 가져올 수 있음
  })
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken.userId
  }
  await req.session.save()
  await client.token.deleteMany({
    where: {
      id: foundToken.userId
    }
  })
  res.json({ ok:true})
}

export default withApiSession(withHandler({methods : ["POST"], handler, isPrivate: false}));