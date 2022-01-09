const React require("react");
const ReactDOM require("react-dom");
const App require(./src/app.js)

const jsx = (
  <App />
);
ReactDOM.render(jsx, document.getElementById("app"));