export const caseStudyList: CaseStudyType[] = [
  {
    title: "Indian Sandstone Patio",
    subheading: "Potterhanworth",
    img: require("@/assets/nov-2020/1.jpg"),
    desc:
      "Our ever popular Indian Sandstone paving slabs.All our paving work is laid on Tarram / Hardcore / full wet mortar base. Raised planters built using new pressure treated sleepers with the addition of low voltage LED lights.",
  },
  {
    title: "Indian Sandstone Patio",
    subheading: "North Hykehamm",
    img: require("@/assets/jan-2020/2.jpg"),
    desc:
      "Silver grey Indian sandstone paving slabs in four different sizes with Marshall Harena circle pack",
  },
  {
    title: "Outdoor living Area",
    subheading: "Lincoln",
    img: require("@/assets/june-2019/1.jpg"),
    desc:
      "Transformed from just a plain lawn area into a maintainable garden ready for the summer! ",
  },
  {
    title: "Circular Patio & Lawn",
    subheading: "Lincoln",
    img: require("@/assets/nov-2018/1.jpg"),
    desc:
      "Stage two of the garden I designed and completed earlier in the year. Raised decking with blue spotlights. Large circular patio with natural sandstone paving slabs. Large circular lawn area with Pennant grey blocks around outer edge.",
  },
  {
    title: "Decking Area",
    subheading: "Burton Waters",
    img: require("@/assets/oct-2018/1.jpg"),
    desc:
      "New decking work carried out to give easy access to the waters edge.",
  },
  {
    title: "Driveway",
    subheading: "North Greetwell",
    img: require("@/assets/july-2018/3.jpg"),
    desc:
      "Marshall Tegula Tradition pavers with Tequla Pennant Grey around outer edge. We use Geotextile Terran on all our Driveways and patios, as well as Linear drainage channels.",
  },
];

export type CaseStudyType = {
  title: string;
  subheading: string;
  img: string;
  desc: string;
};
