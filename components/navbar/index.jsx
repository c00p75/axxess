"use client";

import "./style.scss";
import logo from "@/public/logos/logo-sm.png";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import config from "@/config/config.json";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);


  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header flex-center">
      <nav className={`navbar container ${isScrolled ? 'nav-scrolled' : ''} ${navOpen ? 'py-5 md:py-1' : ''}`}>
        <div className="w-[80%] md:w-fit order-0">
          <Image
            src={logo}
            alt="Logo"
            quality={100}
            className="h-10 w-auto nav-logo"
            width={5}
            height={5}
          />
        </div>

        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        <div
          id="nav-menu"
          className={`w-screen md:w-fit order-3 md:order-1 ${navOpen ? "max-h-[1000px]" : ""}`}
        >
          <ul className={`navbar-nav font-medium gap-10 ${navOpen ? "w-full h-fit" : "w-0 md:w-auto h-0 md:h-auto"}`}>
            {main.map((menu, i) => (
              <div key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>                    
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${
                        pathname === menu.url ? "nav-link-active" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}            
          </ul>
        </div>        
      </nav>
    </header>
  );
};

export default Navbar;
