import React, { useState } from "react";

// ** Composables **
import { useMediaQuery } from "../../composables/mediaQueries";

// ** Styles **
import "./BdNav.scss";

// ** Images **
import Logo from "../../images/logo.png";

interface Route {
  name: string;
  path: string;
}

const BdNav = () => {
  // ** Data **
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
  const { isExtraLarge } = useMediaQuery();

  return (
    <>
      {/* TODO: Show current route */}
      <div style={{ height: `68px` }} />

      <nav className={navDrawerOpen ? "bd-nav-open" : ""}>
        <header className={`bd-nav xf-p-4 xf-px-lg-8`}>
          <div className="bd-nav-content bd-max-width xf-flex-center-between xf-w-100">
            <a href="/" aria-label="home">
              <img src={Logo.src} alt="" />
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
              <ul className={`xf-flex ${isExtraLarge ? "xf-gap-3" : ""}`}>
                {routes.map((route, i) => (
                  <li className="bd-nav-item xf-p-1 xf-text-18-xl" key={i}>
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
