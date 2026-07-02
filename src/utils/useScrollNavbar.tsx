import { useState, useEffect, useRef } from "react";

export function useScrollNavbar() {
  const [isTop, setIsTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsTop(currentY < 50);
      setVisible(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isTop, visible };
}