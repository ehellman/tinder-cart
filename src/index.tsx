import React from "react";
import ReactDOM from "react-dom";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider } from "react-redux";
import store from "./store";

const engine = new Styletron();

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StyletronProvider value={engine}>
      <App />
    </StyletronProvider>
  </Provider>,
  rootElement
);
