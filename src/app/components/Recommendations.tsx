import React from "react";
import ImageKit from "./ImageKit";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* Image user card */}
      <div className="flex items-center justify-between">
        {/* image and  user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <ImageKit
              path="general/general/avatar.png"
              alt="John Doe"
              w={100}
              h={100}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      {/* image user card */}
      <div className="flex items-center justify-between">
        {/* image and  user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <ImageKit
              path="general/general/avatar.png"
              alt="John Doe"
              w={100}
              h={100}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      {/* image user card */}
      <div className="flex items-center justify-between">
        {/* image and  user info */}
        <div className="flex items-center gap-2">
          <div className="relative rounded-full overflow-hidden w-10 h-10">
            <ImageKit
              path="general/general/avatar.png"
              alt="John Doe"
              w={100}
              h={100}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>
        {/* button */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
