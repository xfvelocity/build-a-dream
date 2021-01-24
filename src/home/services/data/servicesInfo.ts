export const servicesInfo: ServicesInfo[] = [
  {
    title: "Garden Care",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna eget.",
    img: require("@/assets/fence.svg"),
  },
  {
    title: "Driveways",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna eget.",
    img: require("@/assets/driveway.svg"),
  },
  {
    title: "Patios",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget magna eget.",
    img: require("@/assets/patio.svg"),
  },
];

export type ServicesInfo = {
    title: string;
    desc: string;
    img: string;
}
