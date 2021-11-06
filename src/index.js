import { StrictMode } from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// import App from "./App";
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post</div>
        </div>
      </div>
    </div>
  );
};
const sss = faker.time.recent();
console.log(sss);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
