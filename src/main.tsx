
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
 // @ts-ignore: CSS module declarations missing
 import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  