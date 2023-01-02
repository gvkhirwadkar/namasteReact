import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    key: "heading1",
  },
  "Heading1 Changed "
);

const heading2 = React.createElement(
  "h2",
  {
    key: "heading2",
  },
  "Heading2"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
