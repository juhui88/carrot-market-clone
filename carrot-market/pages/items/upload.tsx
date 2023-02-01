import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-3 py-16">
      <div >
        <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex items-center justify-center cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500">
          <label className="">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="price" className="font-semibold">Price</label>
        <div className="relative mt-1 flex items-center w-full text-gray-500">
          <div className="absolute left-0 pl-2" >
            <span className="text-sm pointer-events-none">$</span>
          </div>
          <input id="price" className="w-full pl-7 rounded-lg appearance-none border border-gray-400  text-black focus:border-orange-500 focus:ring-orange-500" type="text" placeholder="0.00" />
          <div className="absolute right-0 pr-2">
            <span className="text-sm pointer-events-none">USD</span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <label className="font-semibold">Description</label>
        <div className="mt-1">
          <textarea className="w-full rounded-lg  border-gray-400 focus:border-orange-500 focus:ring-orange-500" rows={4} />
        </div>
      </div>
      <button className="w-full bg-orange-500 text-white rounded-lg h-8 mt-3 hover:bg-orange-600">Upload product</button>
    </div>
  );
};

export default Upload;