import "./App.css";
import VideoPlayer from "./VideoPlayer";
import Header from "./Header";
import { Outlet, useParams } from "react-router-dom";

interface PostParams {
  post: string;
}

function App() {
  let { post } = useParams<keyof PostParams>() as PostParams;

  post = post ?? "getting-started";

  return (
    <div className="container mx-auto flex flex-col gap-y-8 j">
      <Header />
      <div>
        <VideoPlayer post={post} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
