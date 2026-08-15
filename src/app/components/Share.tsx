"use client";
import React, { useRef, useState } from "react";
import ImageKit from "./ImageKit";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const abortController = new AbortController();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const authentication = async () => {
    try {
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`,
        );
      }
      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  // const handleMediaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //   setMedia(e.target.files[0])
  // }
  // }

  // handle the the file upload process.

  const handleUpload = async () => {
    // access the file input element using the ref.

    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("please select a  file to upload");
      return;
    }
    //exist the first file form the file input.
    const file = fileInput.files[0];
    let authParams;
    try {
      authParams = await authentication();
    } catch (error) {
      console.error("failed to authentication for upload", error);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;

    // Call the ImageKit SDK upload function with the required parameters and callbacks.

    try {
      const uploadResponse = await upload({
        // authentication parameters.
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,
        folder:"/posts",
        // Progress callback to update upload progress state
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
        // Abort signal to allow cancellation of the upload if needed.
        abortSignal: abortController.signal,
      });
      console.log("Upload response:", uploadResponse);
    } catch (error) {
      // Handle specific error types provided by the ImageKit SDK.
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        // Handle any other errors that may occur.
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <div className="p-4 flex gap-4">
      {/* avatar */}
      <div className="rounded-full w-10 h-10 overflow-hidden">
        <ImageKit
          path="general/general/avatar.png"
          alt="avatar"
          h={40}
          w={40}
        />
      </div>
      {/* others */}
      <div className="flex-1 flex-col gap-4 ">
        <input
          type="text"
          placeholder="What's is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        <div className="flex items-center justify-between flex-wrap mt-3">
          <div className="flex gap-5 flex-wrap">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              id="file"
            />
            <label htmlFor="file">
              <ImageKit
                path="icons/icons/image.svg"
                alt="share-1"
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
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
          <button
            className="bg-white text-black rounded-full font-bold py-1 px-4"
            onClick={handleUpload}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
