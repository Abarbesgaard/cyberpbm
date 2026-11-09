import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sectionLinks = [
  { href: "#ship", label: "Skibet" },
  { href: "#week", label: "Ugen" },
  { href: "#hunt", label: "Jagten" },
  { href: "#roles", label: "Roller" },
  { href: "#campaign", label: "Kampagne" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    let frame = 0;
    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "";
        document.querySelectorAll("section[id]").forEach((s) => {
          if (window.scrollY >= (s as HTMLElement).offsetTop - 80) current = s.id;
        });
        setActive(current);
      });
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const linkClass = (on: boolean) =>
    `flex h-[52px] items-center border-l border-cp-border px-4 font-mono text-[0.65rem] tracking-[0.18em] uppercase no-underline transition-colors hover:bg-cp-yellow/5 hover:text-cp-yellow ${
      on ? "text-cp-yellow" : "text-cp-mid"
    }`;

  return (
    <nav className="fixed top-0 right-0 left-0 z-[1000] bg-[linear-gradient(to_bottom,#EEECE6,#DCDAD3)] shadow-[0_2px_0_#B5B3AB]">
      <div className="flex h-[52px] items-center px-6">
        <Link to="/" className="mr-auto flex items-center gap-3 no-underline">
          <span className="flex h-7 w-7 items-center justify-center border border-cp-yellow font-head text-[0.55rem] text-cp-yellow">
            KT
          </span>
          <span className="font-head text-[0.8rem] tracking-[0.2em] uppercase text-cp-white">
            USCSS Cassandra
          </span>
        </Link>
        <ul className="hidden list-none md:flex">
          {isHome &&
            sectionLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass(active === link.href.slice(1))}>
                  {link.label}
                </a>
              </li>
            ))}
          <li>
            <Link to="/rules" className={linkClass(pathname === "/rules")}>
              Regler
            </Link>
          </li>
        </ul>
      </div>
      <div className="hazard h-[5px]" />
    </nav>
  );
}
