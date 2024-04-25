export interface Image {
  small: string;
  large: string;
}

export interface WorkExample {
  id: number;
  img: Image;
  title: string;
  desc: string[];
  additionalImages: Image[];
}

const getImages = async (
  directory: number,
  amount: number
): Promise<Image | Image[]> => {
  const arr: Image[] = [];

  for (let i = 1; i <= amount; i++) {
    const images = import.meta.glob(`../images/work/*/*.webp`);

    arr.push({
      small: (await images[`../images/work/${directory}/${i}-w500.webp`]())
        ?.default?.src,
      large: (await images[`../images/work/${directory}/${i}-w1000.webp`]())
        ?.default?.src,
    });
  }

  return amount > 1 ? arr : (arr[0] as Image);
};

export const examplesOfWork: WorkExample[] = [
  // {
  //   id: 1,
  //   img: (await getImages(1, 1)) as Image,
  //   title: "Title (1)",
  //   desc: ["Description (1)"],
  //   additionalImages: (await getImages(1, 5)) as Image[],
  // },
  {
    id: 2,
    img: (await getImages(2, 1)) as Image,
    title: "Indian Sandstone Patio",
    desc: [
      "Our ever-popular Indian Sandstone paving slabs. All our paving work is laid on tarram, hardcore and a wet mortar base. Raised planters built using new pressure-treated sleepers with the addition of low voltage LED lights.",
    ],
    additionalImages: (await getImages(2, 6)) as Image[],
  },
  {
    id: 3,
    img: (await getImages(3, 1)) as Image,
    title: "Circular Patio & Lawn",
    desc: [
      "Stage two of the garden I designed and completed earlier in the year. Raised decking with blue spotlights. Large circular patio with natural sandstone paving slabs. Large circular lawn area with Pennant grey blocks around the outer edge.",
    ],
    additionalImages: (await getImages(3, 5)) as Image[],
  },
  {
    id: 4,
    img: (await getImages(4, 1)) as Image,
    title: "Decking Area",
    desc: [
      "New decking work was carried out to give easy access to the water's edge.",
    ],
    additionalImages: (await getImages(4, 5)) as Image[],
  },
  {
    id: 5,
    img: (await getImages(5, 1)) as Image,
    title: "Outdoor living Area",
    desc: [
      "Transformed from just a plain lawn area into a maintainable garden ready for the summer!",
    ],
    additionalImages: (await getImages(5, 4)) as Image[],
  },
  {
    id: 6,
    img: (await getImages(6, 1)) as Image,
    title: "Indian Sandstone Patio",
    desc: ["Silver grey Indian sandstone paving slabs in four different sizes"],
    additionalImages: (await getImages(6, 4)) as Image[],
  },
  // {
  //   id: 7,
  //   img: (await getImages(7, 1)) as Image,
  //   title: "Title (7)",
  //   desc: ["Description (7)"],
  //   additionalImages: (await getImages(7, 4)) as Image[],
  // },
  // {
  //   id: 8,
  //   img: (await getImages(8, 1)) as Image,
  //   title: "Title (8)",
  //   desc: ["Description (8)"],
  //   additionalImages: (await getImages(8, 4)) as Image[],
  // },
];
