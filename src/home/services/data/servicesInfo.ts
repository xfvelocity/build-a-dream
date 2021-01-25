export const servicesInfo: ServicesInfo[] = [
  {
    title: "Garden Care",
    desc:
      "Services such as: Turfing, Fencing, Plants, Hedge Trimming, Tree Removal, etc.",
    img: require("@/assets/fence.svg"),
  },
  {
    title: "Driveways",
    desc:
      "Our most popular request is for a professional driveway in all shapes and sizes.",
    img: require("@/assets/driveway.svg"),
  },
  {
    title: "Patios",
    desc:
      "Looking to transform your garden? A Patio/Decking can help accomplish this.",
    img: require("@/assets/patio.svg"),
  },
];

export type ServicesInfo = {
  title: string;
  desc: string;
  img: string;
};
