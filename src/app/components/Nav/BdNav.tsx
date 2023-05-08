"use client";

import { useEffect, useState } from "react";
import "./BdNav.scss";
import Image from "next/image";
import Link from "next/link";
import { Route } from "./BdNav.types";

const BdNav = () => {
  const routes: Route[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Our work",
      path: "/our-work",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
  ];

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const setNavDrawerHeight = (): void => {
    const headerElem = document.querySelector(".bd-nav");

    if (headerElem) {
      setNavbarHeight(headerElem.clientHeight);
    }
  };

  useEffect(setNavDrawerHeight);

  return (
    <nav className={navDrawerOpen ? "bd-nav-open" : ""}>
      <header className={`bd-nav xf-py-4 xf-px-8`}>
        <div className="bd-nav-max-width xf-flex-center-between xf-w-100">
          <Image src="/images/logo.png" alt="" width="210" height="40" />

          <div
            className={`bd-nav-btn ${navDrawerOpen ? "bd-nav-btn-open" : ""}`}
            onClick={() => setNavDrawerOpen(!navDrawerOpen)}
          >
            {Array.from(Array(4).keys()).map((x) => (
              <span className="xf-bg-secondary" key={x} />
            ))}
          </div>

          <div className="bd-nav-items xf-ml-auto">
            <ul className="xf-flex">
              {routes.map((route, i) => (
                <li className="bd-nav-item xf-p-1" key={i}>
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {navDrawerOpen && (
        <div className="bd-nav-drawer-overlay">
          <div
            className="bd-nav-drawer-content xf-pt-4 xf-bg-white"
            style={{
              height: `calc(100% - ${navbarHeight}px)`,
              top: `${navbarHeight}px`,
            }}
          >
            <ul>
              {routes.map((route, i) => (
                <li
                  className="bd-nav-drawer-item xf-p-1 xf-text-right xf-pr-8"
                  key={i}
                  onClick={() => setNavDrawerOpen(false)}
                >
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BdNav;
