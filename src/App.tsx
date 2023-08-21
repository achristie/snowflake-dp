import { useState } from "react";
import "./App.css";
import GettingStarted from "./getting-started.mdx";
import VideoPlayer from "./VideoPlayer";
import Header from "./Header";

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-y-8 j">
      <Header />
      <div className="">
        <VideoPlayer />
      </div>
      <div className="">
        <GettingStarted />
      </div>
    </div>
  );
}

export default App;
