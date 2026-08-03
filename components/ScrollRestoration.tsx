"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const scrollKey = (pathname: string) => `antep-scroll-position:${pathname}`;

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(scrollKey(pathname));
    if (savedPosition) {
      requestAnimationFrame(() => window.scrollTo(0, Number(savedPosition)));
    }

    const savePosition = () => {
      sessionStorage.setItem(scrollKey(pathname), String(window.scrollY));
    };

    window.addEventListener("pagehide", savePosition);
    return () => {
      savePosition();
      window.removeEventListener("pagehide", savePosition);
    };
  }, [pathname]);

  return null;
}
