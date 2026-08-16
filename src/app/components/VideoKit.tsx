import { Video } from "@imagekit/next";
type VideoTypes = {
  path: string;
  className?: string;
};
const VideoKit = ({ path, className }: VideoTypes) => {
  const kitUrlEncPoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <Video
      urlEndpoint={kitUrlEncPoint}
      src={path}
      className={className}
      controls
      preload="none"
      transformation={[
        {
          overlay: {
            type: "video",
            input: "overlay.mp4",
            timing: { start: 5, duration: 10 },
          },
        },
      ]}
    />
  );
};

export default VideoKit;
