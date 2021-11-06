import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CommmentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

// import App from "./App";
const App = () => {
  // another way to provide props with value from Faker
  let imageFromFakerJs = faker.image.avatar;

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommmentDetail
          author="Sam"
          timeAgo="Today at 6:00 PM"
          commentText="hello"
          // src={imageFromFakerJs()}

          src={faker.image.avatar()}
        />
      </ApprovalCard>

      {/* <ApprovalCard /> */}
      <ApprovalCard>
        <CommmentDetail
          author="Toni"
          timeAgo="yesterday at 2:00 PM"
          commentText="good morning"
          // src={imageFromFakerJs()}

          src={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommmentDetail
          author="Cher"
          timeAgo="Today at 8:00 PM"
          commentText="hi everyone"
          // src={imageFromFakerJs()}

          src={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommmentDetail
        author="Cher"
        timeAgo="Today at 9:10 PM"
        commentText="Moin Moin"
        // src={imageFromFakerJs()}

        src={faker.image.avatar()}
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
