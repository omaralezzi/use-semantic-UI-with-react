import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CommmentDetail from "./CommentDetail";

// import App from "./App";
const App = () => {
  return (
    <div className="ui container comments">
      <CommmentDetail />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
