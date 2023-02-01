import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
    <div className="pb-12  w-full max-w-xl divide-y-[1px]">
      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        
        <div
          key={i}
          className="flex px-4 cursor-pointer py-3 items-center space-x-3"
        >
          <Link href={`chats/${i}`} className="flex">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div className="pl-4">
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
          </Link>
        </div>  
        
        
      ))}
    </div>  
    </Layout>
    
  );
};

export default Chats;