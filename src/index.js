import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CommmentDetail from "./CommentDetail";
import faker from "faker";

// import App from "./App";
const App = () => {
  let imageFromFakerJs = faker.image.avatar;

  return (
    <div className="ui container comments">
      <CommmentDetail
        author="Sam"
        timeAgo="Today at 6:00 PM"
        commentText="hello"
        src={imageFromFakerJs()}

        // src={faker.image.avatar()}
      />
      <CommmentDetail
        author="Toni"
        timeAgo="yesterday at 2:00 PM"
        commentText="good morning"
        src={imageFromFakerJs()}

        // src={faker.image.avatar()}
      />
      <CommmentDetail
        author="Cher"
        timeAgo="Today at 8:00 PM"
        commentText="hi everyone"
        src={imageFromFakerJs()}

        // src={faker.image.avatar()}
      />
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
