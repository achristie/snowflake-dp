import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import ReactPlayer from "react-player/youtube";

const VIDEOS = [
  { name: "Getting Started", url: "https://youtu.be/ivW9gDTfMWY" },
  { name: "With Python", url: "https://youtu.be/A61yj_ZfNYc" },
  { name: "With PowerBI", url: "https://youtu.be/ivW9gDTfMWY" },
  { name: "With Tableau", url: "https://youtu.be/ivW9gDTfMWY" },
  { name: "With Streamlit", url: "https://youtu.be/ivW9gDTfMWY" },
];

function VideoPlayer() {
  const [active, setActive] = useState<string>("Getting Started");
  return (
    <div className="flex flex-row h-80 lg:h-96 justify-center">
      <div className="flex aspect-video">
        <VideoContainer url={VIDEOS.filter((v) => v.name === active)[0].url} />
      </div>
      <div className="w-48 bg-zinc-900 rounded-e-md ">
        <Nav
          videos={VIDEOS.map((v) => v.name)}
          handleClick={setActive}
          active={active}
        />
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
  videos: string[];
  active: string;
  handleClick: Dispatch<SetStateAction<string>>;
}

function Nav({ videos, handleClick, active }: NavProps) {
  return (
    <ul className="text-xl flex flex-col h-full justify-center">
      {videos.map((item) => {
        return (
          <NavItem
            isActive={active === item}
            key={item}
            handleClick={() => handleClick(item)}
          >
            {item}
          </NavItem>
        );
      })}
    </ul>
  );
}

interface NavItemProps {
  children: ReactNode;
  isActive: boolean;
  handleClick: MouseEventHandler;
}

function NavItem({ isActive, children, handleClick }: NavItemProps) {
  return (
    <div
      onClick={handleClick}
      className={`border-solid border-zinc-700 border-b-2 p-2 pl-4 hover:cursor-pointer ${
        isActive
          ? "text-green-300 font-semibold"
          : "text-zinc-400 hover:bg-green-300 hover:text-white"
      }`}
    >
      <li className="">{children}</li>
    </div>
  );
}

export default VideoPlayer;
