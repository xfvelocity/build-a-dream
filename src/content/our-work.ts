import HeaderImage from "../images/header.png";

export interface WorkExample {
  id: number;
  img: string;
  location: string;
  completedDate: string;
  title: string;
  desc: string[];
  additionalImages: string[];
}

export const examplesOfWork: WorkExample[] = [
  {
    id: 1,
    img: HeaderImage,
    location: "North Hykeham",
    completedDate: "17/05/2023",
    title: "Sandstone Paving",
    desc: [
      "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base.",
      "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    ],
    additionalImages: [HeaderImage, HeaderImage, HeaderImage, HeaderImage],
  },
  {
    id: 2,
    img: HeaderImage,
    location: "North Hykeham",
    completedDate: "17/05/2023",
    title: "Outdoor living area",
    desc: [
      "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base.",
      "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    ],
    additionalImages: [HeaderImage, HeaderImage, HeaderImage, HeaderImage],
  },
  {
    id: 3,
    img: HeaderImage,
    location: "North Hykeham",
    completedDate: "17/05/2023",
    title: "Circular patio & lawn",
    desc: [
      "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base.",
      "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    ],
    additionalImages: [HeaderImage, HeaderImage, HeaderImage, HeaderImage],
  },
  {
    id: 4,
    img: HeaderImage,
    location: "North Hykeham",
    completedDate: "17/05/2023",
    title: "Decking",
    desc: [
      "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base.",
      "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    ],
    additionalImages: [HeaderImage, HeaderImage, HeaderImage, HeaderImage],
  },
  {
    id: 5,
    img: HeaderImage,
    location: "North Hykeham",
    completedDate: "17/05/2023",
    title: "Driveway",
    desc: [
      "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base.",
      "Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    ],
    additionalImages: [HeaderImage, HeaderImage, HeaderImage, HeaderImage],
  },
];
