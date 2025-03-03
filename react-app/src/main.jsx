import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Import App
import { AuthProvider } from "./store/auth.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);
