import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};
//if we are in development an in isolation
//call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
//We are running throught container
//and we should export the mount function
export { mount };
