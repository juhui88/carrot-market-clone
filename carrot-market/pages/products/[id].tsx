import Layout from "@/components/layout";
import type { NextPage } from "next";
import Button from "@components/button";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
    <div className="p-3">
      <div className="">
        <div className="bg-slate-300 w-full h-96"/>
        <div className="py-2 flex items-center">
          <div className="h-14 w-14 bg-slate-300 rounded-full"/>
          <div className="px-2">
            <p>Steve Jebs</p>
            <p className="text-sm text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8">
          <h1 className="font-extrabold text-2xl">Galaxy S50</h1>
          <p className="text-xl font-semibold">$140</p>
          <p className="mt-3 text-gray-600">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
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
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} >
              <div className="bg-slate-300 w-full h-52"/>
              <h3 className="mt-3 text-gray-700">Galaxy S60</h3>
              <p className="">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>  
    </Layout>
    
  );
};

export default ItemDetail;