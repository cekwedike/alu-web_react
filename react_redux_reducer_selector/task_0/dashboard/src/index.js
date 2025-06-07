import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// Dynamic import for code splitting
const App = lazy(() => import("./App/App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);