"use client";

import { Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = ["about", "skills", "experience", "achievements", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const links = useMemo(
    () =>
      navItems.map((id) => ({
        id,
        label: id[0].toUpperCase() + id.slice(1),
      })),
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );

    navItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-[20px] border border-primary px-3 py-1 font-[family-name:var(--font-body)] text-lg font-semibold leading-none text-primary transition-colors hover:border-link-hover hover:text-link-hover"
        >
          PK
        </button>

        <div className="hidden items-center justify-center gap-6 xl:gap-8 lg:flex">
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="relative font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-link-hover"
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-px bg-primary transition-all ${
                  active === item.id ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2">
          <Sheet>
            <SheetTrigger className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground lg:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="border-border bg-card">
              <div className="mt-10 flex flex-col gap-5">
                {links.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-link-hover"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
