import Comments from '@/app/components/Comments';
import ImageKit from '@/app/components/ImageKit';
import Post from '@/app/components/Post';
import Link from 'next/link';
import React from 'react'

const StatusPage = () => {
  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black bg-opacity-60">
        <Link href={"/"}>
          <ImageKit path="icons/icons/back.svg" alt="back" w={21} h={21} />
        </Link>
        <h1 className="font-bold text-md">Post</h1>
      </div>
      <Post type="status" />
      <Comments/>
    </div>
  );
}

export default StatusPage