import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
