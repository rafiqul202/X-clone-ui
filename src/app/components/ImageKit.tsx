"use client";
import { Image } from "@imagekit/next";

type ImagType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};
const ImageKit = ({ path, w, h, alt, className, tr }: ImagType) => {
  const urlEncPoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <Image
      urlEndpoint={urlEncPoint}
      src={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      alt={alt}
      className={className}
    />
  );
};

export default ImageKit;
