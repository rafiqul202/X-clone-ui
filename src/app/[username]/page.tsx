import Link from "next/link";
import React from "react";
import ImageKit from "../components/ImageKit";

const UserPage = () => {
  return (
    <div>
      {/* profile title  */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black bg-opacity-60">
        <Link href={"/"}>
          <ImageKit path="icons/icons/back.svg" alt="back" w={21} h={21} />
        </Link>
        <h1 className="font-bold text-md">Rafiqul Hasan</h1>
      </div>
      {/* info */}
      <div>
        {/* cover and avatar container */}
        <div className="relative w-full">
          {/* cover */}
          <div className="w-full aspect-[3/1] relative">
            <ImageKit
              path="/general/general/cover.jpg"
              alt="cover"
              w={600}
              h={200}
            />
          </div>
          {/* avatar */}
          <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-gray-400 bg-gray-300 absolute left-4 -translate-y-1/2 cursor-pointer">
            <ImageKit
              path="/general/general/avatar.png"
              alt="cover"
              w={100}
              h={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
