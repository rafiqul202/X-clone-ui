import React from "react";
import ImageKit from "./ImageKit";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { getFileDetails } from "@/actions";
import VideoKit from "./VideoKit";
import Link from "next/link";

const Post = async ({ type }: { type?: "status" | "comment" }) => {
  const fileDetails = await getFileDetails("6a806da05c7cd75eb8d00039");
  // console.log(fileDetails);
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Rafiqul hasan reposted</span>
      </div>
      {/* post content */}
      {/* <div className="flex gap-4"> */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* avatar */}
        <div
          className={`${
            type === "status"
              ? "hidden"
              : "relative w-10 h-10 rounded-full overflow-hidden"
          }`}
        >
          <ImageKit
            path="general/general/avatar.png"
            alt="avatar"
            h={100}
            w={100}
          />
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <Link href={`/lamaWebDev`} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <ImageKit
                  path="general/general/avatar.png"
                  alt="avatar"
                  h={100}
                  w={100}
                />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Rafiqul Hasna</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  rafiqulhasan@gmail.com
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 day ago</span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* text and media */}
          <Link href={`/rafiqulhasan/status/123`}>
            <div className="">
              <p className={`mb-3${type === "status" && "text-lg"}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, voluptatem!
              </p>
              {fileDetails && fileDetails.fileType === "image" ? (
                <ImageKit
                  path={fileDetails.filePath}
                  alt="post"
                  w={fileDetails.width}
                  h={fileDetails.height}
                  className={
                    fileDetails?.customMetadata?.sensitive ? "blur-lg" : ""
                  }
                />
              ) : (
                <VideoKit
                  path={fileDetails.filepath}
                  className={
                    fileDetails?.customMetadata?.sensitive ? "blur-lg" : ""
                  }
                />
              )}
              {type === "status" && (
                <span className="text-textGray">8:41 PM · Dec 5, 2024</span>
              )}
              <PostInteractions />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
