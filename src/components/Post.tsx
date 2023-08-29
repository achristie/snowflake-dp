import GettingStarted from "../content/getting-started.mdx";
import WithPython from "../content/with-python.mdx";
import WithStreamlit from "../content/with-streamlit.mdx";
import { useParams } from "react-router-dom";

interface PostParams {
  post: string;
}

export default function Post() {
  let { post } = useParams<keyof PostParams>() as PostParams;

  return renderPage(post);
}

function renderPage(page: string) {
  switch (page) {
    case "getting-started":
      return <GettingStarted />;
    case "python":
      return <WithPython />;
    case "streamlit":
      return <WithStreamlit />;
  }

  return <GettingStarted />;
}
