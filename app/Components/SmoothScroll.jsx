"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Flag the component as safely mounted on the browser client
    setMounted(true);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Return a transparent empty fragment on server, then render layout on client
  if (!mounted) {
    return <>{children}</>;
  }

  return children;
}