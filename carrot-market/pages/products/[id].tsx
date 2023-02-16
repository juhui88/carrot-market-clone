import Layout from "@components/layout";
import type { NextPage } from "next";
import Button from "@components/button";
import { useRouter } from "next/router";
import  useSWR from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/server/utils";

interface ProductWithUser extends Product {
  user: User;
}
interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const {data} = useSWR<ItemDetailResponse>(router.query.id ? `/api/products/${router.query.id}`: null )
 
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`)
  const onFavClick = () => {
    toggleFav({})
  }
  return (
    <Layout canGoBack>
    <div className="p-3">
      <div className="">
        <div className="bg-slate-300 w-full h-96"/>
        <div className="py-2 flex items-center">
          <div className="h-14 w-14 bg-slate-300 rounded-full"/>
          <div className="px-2">
              <p>{data?.product?.user?.name}</p>
              <Link href={`/users/profiles/${data?.product?.user?.name}`}>
                <p className="text-sm text-gray-500">View profile &rarr;</p>
              </Link>
            
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8">
          <h1 className="font-extrabold text-2xl">{data?.product?.name}</h1>
          <p className="text-xl font-semibold">${data?.product?.price}</p>
          <p className="mt-3 text-gray-600">
            {data?.product?.description}
          </p>
          <div className="mt-4 flex items-center h-10 space-x-2">
            <Button large text="Talk to seller"/>
              <button onClick={onFavClick} className={cls("p-3 rounded-md flex items-center justify-center  hover:bg-gray-100 ", data?.isLiked ? "text-red-400 hover:text-red-500": "text-gray-400 hover:text-gray-500")}>
                {data?.isLiked ? 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                }
              
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="font-bold py-4">Similar items</h2>
        <div className="grid md:grid-cols-2 grid-cols-2 gap-2">
          {data?.relatedProducts?.map((product) => (
            <div key={product.id} >
              <div className="bg-slate-300 w-full h-52"/>
              <h3 className="mt-3 text-gray-700">{ product.name}</h3>
              <p className="">${ product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>  
    </Layout>
    
  );
};

export default ItemDetail;