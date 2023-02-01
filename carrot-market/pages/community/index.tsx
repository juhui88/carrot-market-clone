import Layout from "@/components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Community: NextPage = () => {
  return (
    <Layout title="동네생활" hasTabBar>
    <div className=" px-3 flex flex-col space-y-8">
        {[...Array(10).fill(1).map((_,i) => (
    <Link key = {i} href = {`/items/community/${i}`}>
    <div className="">
        <span className="bg-gray-100 rounded-full text-xs px-2.5 py-0.5 text-gray-800">동네질문</span>
        <p className="text-md mt-2">
          <span className="text-orange-500 font-bold">Q.</span> What is the best mandu restaurant?
        </p>
        <div className="flex justify-between text-gray-500 text-sm  py-2">
          <span>니꼬</span>
          <span>18시간 전</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-600 py-2 border-y border-gray-300 text-sm">
          <span className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>    
    </Link>
    
        ))]}
    <Link href="/items/community/write">
      <button className="p-4 shadow-xl hover:bg-orange-500 bg-orange-400 text-white rounded-full fixed right-3 bottom-24 transition-colors">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>  
    </Link>
      
    </div>  
    </Layout>
    
  );
};

export default Community;