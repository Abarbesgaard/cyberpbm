import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sectionLinks = [
  { href: "#mission", label: "// MISSION" },
  { href: "#grid-section", label: "// OGM" },
  { href: "#actions", label: "// ACTIONS" },
  { href: "#protocol", label: "// PROTOCOL" },
  { href: "#resolution", label: "// RESOLUTION" },
  { href: "#orders", label: "// ORDERS" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    function onScroll() {
      let current = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 80) {
          current = s.id;
        }
      });
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex h-[52px] items-center bg-cp-dark/[0.96] px-8 border-b border-cp-border-bright">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cp-red via-cp-yellow to-transparent" />

      <Link
        to="/"
        className="mr-auto font-head font-black text-[1.1rem] tracking-[0.15em] uppercase text-cp-red-bright no-underline"
        style={{ textShadow: "0 0 20px var(--cp-red-dim)" }}
      >
        CyberPBM
      </Link>

      <ul className="hidden md:flex list-none gap-0">
        {isHome &&
          sectionLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`flex h-[52px] items-center border-l border-cp-border px-4 font-mono text-[0.65rem] tracking-[0.1em] uppercase no-underline transition-colors duration-150 hover:bg-cp-yellow/5 hover:text-cp-yellow ${
                  active === link.href.slice(1) ? "text-cp-yellow" : "text-cp-mid"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        <li>
          <Link
            to="/rules"
            className={`flex h-[52px] items-center border-l border-cp-border px-4 font-mono text-[0.65rem] tracking-[0.1em] uppercase no-underline transition-colors duration-150 hover:bg-cp-red/10 hover:text-cp-red-bright ${
              pathname === "/rules" ? "text-cp-red-bright" : "text-cp-mid"
            }`}
          >
            // RULES
          </Link>
        </li>
      </ul>
    </nav>
  );
}
