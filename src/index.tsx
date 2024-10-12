import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// hot reloading. It works by replacing a module of the application
// during runtime with an updated one so that it’s available for instant use.
// @ts-ignore
module.hot.accept();
