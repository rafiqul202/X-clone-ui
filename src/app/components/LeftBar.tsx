import Link from "next/link";
import React from "react";
import ImageKit from "./ImageKit";

const menuLists = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];
const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* logo menu button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* logo */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
          <ImageKit path={"/icons/icons/logo.svg"} alt="Logo" w={24} h={24} />
        </Link>
        {/* menu lists */}
        <div className="flex flex-col gap-4 mt-5 w-full">
          {menuLists.map(({ icon, id, link, name }) => (
            <Link
              href={link}
              key={id}
              className="p-2 rounded-full hover:bg-[#242424] flex items-center gap-4 text-start"
            >
              <ImageKit
                path={`/icons/icons/${icon}`}
                alt={name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{name}</span>
            </Link>
          ))}
        </div>
        {/* button */}
        <Link
          href={"/"}
          className=" xxl:hidden bg-white text-black rounded-full font-bold w-11 h-11 flex items-center justify-center mx-auto"
        >
          <ImageKit
            path={"/icons/icons/post.svg"}
            alt="new Post"
            w={24}
            h={24}
          />
        </Link>
        <Link
          href={"/"}
          className="hidden xxl:block bg-white text-black rounded-2xl font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between gap-x-6 ">
        <div className="flex justify-start gap-2">
          {/* image */}
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <ImageKit
              path={"/general/general/avatar.png"}
              alt="Avatar"
              h={45}
              w={45}
              className="rounded-full ring-2 ring-gray-600 p-1"
            />
          </div>
          {/* text */}
          <div className="hidden xxl:flex flex-col">
            <span className="text-sm">Rafiqul Hasan</span>
            <span className="text-xs text-gray-400">
              rafiqulhasan398@gmail.com
            </span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold text-white">
          ...
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
