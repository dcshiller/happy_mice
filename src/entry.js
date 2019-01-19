import ReactDOM from "react-dom";
import React from "react";
import IndexPage from "./pages/index";

document.addEventListener("DOMContentLoaded", () => {
ReactDOM.render(
  <IndexPage/>,
  document.querySelector('.entry'),
);
});
