import "./App.css";
import GettingStarted from "./getting-started.mdx";
import WithPython from "./content/with-python.mdx";
import VideoPlayer from "./VideoPlayer";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Getting Started");

  return (
    <div className="container mx-auto flex flex-col gap-y-8 j">
      <Header />
      <div>
        <VideoPlayer page={page} setPage={setPage} />
      </div>
      <div>
        {renderPage(page)}
        {/* <GettingStarted /> */}
      </div>
    </div>
  );
}

function renderPage(page: string) {
  switch (page) {
    case "Getting Started":
      return <GettingStarted />;
    case "With Python":
      return <WithPython />;
  }

  return <GettingStarted />;
}

export default App;
