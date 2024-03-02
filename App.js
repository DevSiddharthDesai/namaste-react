/**
 *
 * <div id="parent">
 *  <div class="child">
 *      <h1>Hello</h1>
 *      <h2>H2 Tag</h2>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello, World from react inside it!"
    ),
    React.createElement(
      "h2",
      { id: "heading1" },
      "Hello, World from react inside its!"
    ),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
