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
  {
    id: 1,
    img: (await getImages(1, 1)) as Image,
    title: "Title (1)",
    desc: ["Description (1)"],
    additionalImages: (await getImages(1, 5)) as Image[],
  },
  {
    id: 2,
    img: (await getImages(2, 1)) as Image,
    title: "Title (2)",
    desc: ["Description (2)"],
    additionalImages: (await getImages(2, 6)) as Image[],
  },
  {
    id: 3,
    img: (await getImages(3, 1)) as Image,
    title: "Title (3)",
    desc: ["Description (3)"],
    additionalImages: (await getImages(3, 5)) as Image[],
  },
  {
    id: 4,
    img: (await getImages(4, 1)) as Image,
    title: "Title (4)",
    desc: ["Description (4)"],
    additionalImages: (await getImages(4, 5)) as Image[],
  },
  {
    id: 5,
    img: (await getImages(5, 1)) as Image,
    title: "Title (5)",
    desc: ["Description (5)"],
    additionalImages: (await getImages(5, 4)) as Image[],
  },
  {
    id: 6,
    img: (await getImages(6, 1)) as Image,
    title: "Title (6)",
    desc: ["Description (6)"],
    additionalImages: (await getImages(6, 4)) as Image[],
  },
  {
    id: 7,
    img: (await getImages(7, 1)) as Image,
    title: "Title (7)",
    desc: ["Description (7)"],
    additionalImages: (await getImages(7, 4)) as Image[],
  },
  {
    id: 8,
    img: (await getImages(8, 1)) as Image,
    title: "Title (8)",
    desc: ["Description (8)"],
    additionalImages: (await getImages(8, 4)) as Image[],
  },
];
