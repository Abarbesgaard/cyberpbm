import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll("section[id]").forEach((s) => {
      if ((s as HTMLElement).id === "hero") return;
      (s as HTMLElement).style.opacity = "0";
      (s as HTMLElement).style.transform = "translateY(24px)";
      (s as HTMLElement).style.transition =
        "opacity 0.55s ease, transform 0.55s ease";
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);
}
