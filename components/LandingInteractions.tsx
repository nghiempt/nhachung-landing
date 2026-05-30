"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    openMobileMenu?: () => void;
    closeMobileMenu?: () => void;
  }
}

export default function LandingInteractions() {
  useEffect(() => {
    window.openMobileMenu = () => {
      document.getElementById("mobileMenu")?.classList.add("open");
      document.body.style.overflow = "hidden";
    };

    window.closeMobileMenu = () => {
      document.getElementById("mobileMenu")?.classList.remove("open");
      document.body.style.overflow = "";
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.closeMobileMenu?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      delete window.openMobileMenu;
      delete window.closeMobileMenu;
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
