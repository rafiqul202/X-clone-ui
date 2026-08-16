"use client";
import ImageKit from "@/app/components/ImageKit";
import { useRouter } from "next/navigation";
import React from "react";

const PostModal = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-14">
        {/* top */}
        <div className="flex justify-between items-center">
          <div className="cursor-pointer " onClick={handleClose}>
            X
          </div>
          <div className="text-iconBlue font-bold">Draft</div>
        </div>
        {/* center */}
        <div className="py-6 flex gap-4">
          <div className="relative w-11 h-11 rounded-full overflow-hidden">
            <ImageKit
              path="/general/general/avatar.png"
              alt="Avatar"
              w={100}
              h={100}
            />
          </div>
          <input
            className="bg-transparent flex-1 outline-none text-lg"
            type="text"
            placeholder="What is happening!?"
          />
        </div>
        {/* bottom */}
        <div className="flex justify-between items-center gap-4 flex-wrap border-t border-borderGray pt-2">
          <div className="flex gap-4 flex-wrap">
            <ImageKit
              path="icons/icons/image.svg"
              alt="share-1"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageKit
              path="icons/icons/gif.svg"
              alt="share-1"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageKit
              path="icons/icons/poll.svg"
              alt="share-1"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageKit
              path="icons/icons/emoji.svg"
              alt="share-1"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageKit
              path="icons/icons/schedule.svg"
              alt="share-1"
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageKit
              path="icons/icons/location.svg"
              alt="share-1"
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-5 text-black bg-white rounded-3xl cursor-pointer font-bold">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
