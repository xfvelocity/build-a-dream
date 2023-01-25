import { NavLink, SocialNavLink } from "../types/nav.types";

export const navLinksData: NavLink[] = [
  {
    name: "Home",
    link: "/",
    active: false,
  },
  {
    name: "Our Work",
    link: "/ourwork",
    active: false,
  },
  {
    name: "Contact Us",
    link: "/contact",
    active: false,
  },
];

export const socialLinksData: SocialNavLink[] = [
  {
    iconName: "mdi-facebook",
    link: "https://www.facebook.com/BuildADreamLandscapers",
  },
];
