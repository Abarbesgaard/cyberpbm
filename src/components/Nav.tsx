import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sectionLinks = [
  { href: "#systems", label: "Systemer" },
  { href: "#ship", label: "Skibet" },
  { href: "#week", label: "Ugen" },
  { href: "#tribunal", label: "Tribunal" },
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
          <span className="plate-orange plate !px-2 !py-1 !pl-3 font-head !text-[0.55rem] !tracking-[0.1em]">KT</span>
          <span className="font-head text-[0.8rem] tracking-[0.2em] uppercase text-cp-white">
            USCSS Cassandra
          </span>
          <span className="lamp lamp-green ml-1 hidden sm:inline-block" aria-hidden />
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
      <div className="lightstrip mx-auto mt-[3px] h-[3px] w-1/3 opacity-90" aria-hidden />
    </nav>
  );
}
