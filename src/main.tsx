import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 1. Import the standard GSAP packages (no more -trial!)
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Adding this as most portfolios use it
import { useGSAP } from "@gsap/react";

// 2. Register them globally
gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);