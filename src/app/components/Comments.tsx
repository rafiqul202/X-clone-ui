import React from "react";
import ImageKit from "./ImageKit";
import Post from "./Post";

const Comments = () => {
  return (
    <div>
      <form className="flex items-center justify-between gap-4 p-4 ">
        <div className="relative w-9 h-9 rounded-full overflow-hidden">
          <ImageKit
            path="/general/general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
          />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </form>
      <Post />
    </div>
  );
};

export default Comments;
