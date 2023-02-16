import Layout from "@components/layout";
import type { NextPage } from "next";
import Button from "@components/button";
import { useRouter } from "next/router";
import  useSWR from "swr";
import Link from "next/link";
import { Product, User } from "@prisma/client";

interface ProductWithUser extends Product {
  user: User;
}
interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  const {data} = useSWR<ItemDetailResponse>(router.query.id ? `/api/products/${router.query.id}`: null )
 
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
            <button >
              <svg
                className="h-5 w-5 text-gray-400 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
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