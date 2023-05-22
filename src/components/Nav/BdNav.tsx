import React from "react";

import { useState } from "react";
import type { Route } from "./BdNav.types";

import "./BdNav.scss";

import Logo from "../../images/logo.png";

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

  return (
    <>
      <div style={{ height: `68px` }} />

      <nav className={navDrawerOpen ? "bd-nav-open" : ""}>
        <header className={`bd-nav xf-p-4 xf-px-lg-8`}>
          <div className="bd-nav-content bd-max-width xf-flex-center-between xf-w-100">
            <a href="/" aria-label="home">
              <img src={Logo} alt="" />
            </a>

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
                    <a href={route.path}>{route.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        {navDrawerOpen && (
          <div
            className="bd-nav-drawer-overlay"
            onClick={() => setNavDrawerOpen(false)}
          >
            <div
              className="bd-nav-drawer-content xf-pt-4 xf-bg-white"
              style={{
                height: `calc(100% - 68px)`,
                top: `68px`,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <ul>
                {routes.map((route, i) => (
                  <li
                    className="bd-nav-drawer-item xf-p-1 xf-text-right xf-pr-8"
                    key={i}
                    onClick={() => setNavDrawerOpen(false)}
                  >
                    <a href={route.path}>{route.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default BdNav;
