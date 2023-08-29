import { ReactNode } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VIDEOS = [
  {
    name: "Getting Started",
    url: "https://youtu.be/ivW9gDTfMWY",
    post: "getting-started",
  },
  { name: "With Python", url: "https://youtu.be/A61yj_ZfNYc", post: "python" },
  {
    name: "With PowerBI",
    url: "https://youtu.be/ivW9gDTfMWY",
    post: "powerbi",
  },
  {
    name: "With Tableau",
    url: "https://youtu.be/ivW9gDTfMWY",
    post: "tableau",
  },
  {
    name: "With Streamlit",
    url: "https://youtu.be/v_kvxjlEWPg",
    post: "streamlit",
  },
];

interface VideoPlayerProps {
  post: string;
}

function VideoPlayer({ post }: VideoPlayerProps) {
  let video = VIDEOS.filter((v) => v.post == post)[0];

  return (
    <div className="flex flex-row h-96 lg:h-[450px] justify-center">
      <div className="flex aspect-video">
        <VideoContainer url={video.url} />
      </div>
      <div className="w-48 bg-zinc-900 rounded-e-md ">
        <Nav post={post} />
      </div>
    </div>
  );
}

interface VideoContainerProps {
  url: string;
}

function VideoContainer({ url }: VideoContainerProps) {
  return <ReactPlayer url={url} width="100%" height="100%" controls={true} />;
}

interface NavProps {
  post: string;
}

function Nav({ post }: NavProps) {
  return (
    <ul className="text-xl flex flex-col h-full justify-center">
      {VIDEOS.map((item) => {
        return (
          <NavItem
            video={item}
            post={post}
            isActive={item.post == post}
            key={item.name}
          >
            {item.name}
          </NavItem>
        );
      })}
    </ul>
  );
}

interface NavItemProps {
  video: { name: string; url: string; post: string };
  children: ReactNode;
  isActive: boolean;
  post: string;
}

function NavItem({ video, children, isActive }: NavItemProps) {
  return (
    <Link to={video.post}>
      <motion.div
        className={`border-solid border-zinc-700 border-b-2 p-2 pl-4 hover:cursor-pointer transition-colors duration-150 ${
          isActive ? "text-green-300 font-semibold" : "text-zinc-400 "
        }`}
      >
        <li>{children}</li>
      </motion.div>
    </Link>
  );
}

export default VideoPlayer;
