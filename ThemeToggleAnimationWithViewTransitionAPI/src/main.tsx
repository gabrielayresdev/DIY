import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ColorThemeProvider } from "./contexts/ColorThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </React.StrictMode>
);
