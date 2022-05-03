import React from "react";
import ReactDOM from "react-dom/client";

import Talk from "./Talk";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Talk />
  </React.StrictMode>
);
