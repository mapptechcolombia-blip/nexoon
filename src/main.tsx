import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import App from "./App";
import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
      <FloatingWhatsAppButton />
    </MotionConfig>
  </StrictMode>
);
