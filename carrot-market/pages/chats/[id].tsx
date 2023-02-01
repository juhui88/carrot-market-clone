import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 bg-slate-500 rounded-full"/>
        <div className="w-1/2 text-sm border text-gray-700 border-gray-300 rounded-md p-2">
            <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-2 space-x-reverse">
        <div className="w-8 h-8 bg-slate-500 rounded-full" />
        <div className="w-1/2 text-sm border text-gray-700 border-gray-300 rounded-md p-2">
            <p>I want ￦20,000</p>
        </div>
        
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 bg-slate-500 rounded-full" />
        <div className="w-1/2 text-sm border text-gray-700 border-gray-300 rounded-md p-2">미쳤어</div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-0 left-0 right-0 ">
        <div className="relative flex items-center">
          <input className="shadow-sm rounded-full h-8 w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-7" type="text" />
          <div className="absolute right-2">
            <button className="rounded-full bg-orange-500 text-white px-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;