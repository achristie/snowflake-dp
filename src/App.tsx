import "./App.css";
import GettingStarted from "./getting-started.mdx";
import WithPython from "./content/with-python.mdx";
import WithStreamlit from "./content/with-streamlit.mdx";
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
      <div>{renderPage(page)}</div>
    </div>
  );
}

function renderPage(page: string) {
  switch (page) {
    case "Getting Started":
      return <GettingStarted />;
    case "With Python":
      return <WithPython />;
    case "With Streamlit":
      return <WithStreamlit />;
  }

  return <GettingStarted />;
}

export default App;
