import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Root = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "shreyashhatkar");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute("data-message", "Thank you for visiting. You can buy me a coffee.");
    script.setAttribute("data-color", "#5F7FFF");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    document.body.appendChild(script);
  }, []);

  return <App />;
};

ReactDOM.render(<Root />, document.getElementById("root"));
