import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementDefault } from "./screens/ElementDefault";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementDefault />
  </StrictMode>,
);
