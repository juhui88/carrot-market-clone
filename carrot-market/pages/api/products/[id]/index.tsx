import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/client/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {query:{id}, session:{user} } = req;
  const product = await client.product.findUnique({
      where: {
          id: +id?.toString()
      },
      include: {
          user: {
              select: {
                  id: true,
                  name: true,
                  avatar: true
              }
          },
      }
  })

  const terms = product?.name.split(" ").map((word) => ({ // 물건 이름 띄어쓰기 기준으로 분리
  name: {
    contains: word,
    },
  }));
  
  const relatedProducts = await client.product.findMany({
    where: {
      OR: terms, // 용어가 포함된 다른 제품들 찾기
      AND: {
        id: {
          not: product?.id, // 현재 보여지는 제품 빼고
        },
      },
    },
  });
  const isLiked = Boolean(await client.fav.findFirst({
    where: {
      productId: product?.id,
      userId: user?.id
    },
    select: {
      id:true
    }
  }))
  res.json({ ok: true, product, isLiked,  relatedProducts });
}

export default withApiSession(
  withHandler({
    methods:["GET"],
    handler,
  })
);