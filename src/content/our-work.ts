// 1
import One1 from "../images/work/1/1-min.jpg";
import One2 from "../images/work/1/2-min.jpg";
import One3 from "../images/work/1/3-min.jpg";
import One4 from "../images/work/1/4-min.jpg";
import One5 from "../images/work/1/5-min.jpg";
import One6 from "../images/work/1/6-min.jpg";

// 2
import Two1 from "../images/work/2/1-min.jpg";
import Two2 from "../images/work/2/2-min.jpg";
import Two3 from "../images/work/2/3-min.jpg";
import Two4 from "../images/work/2/4-min.jpg";
import Two5 from "../images/work/2/5-min.jpg";
import Two6 from "../images/work/2/6-min.jpg";

// 3
import Three1 from "../images/work/3/1-min.jpg";
import Three2 from "../images/work/3/2-min.jpg";
import Three3 from "../images/work/3/3-min.jpg";
import Three4 from "../images/work/3/4-min.jpg";
import Three5 from "../images/work/3/5-min.jpg";
import Three6 from "../images/work/3/6-min.jpg";

// 4
import Four1 from "../images/work/4/1-min.jpg";
import Four2 from "../images/work/4/2-min.jpg";
import Four3 from "../images/work/4/3-min.jpg";
import Four4 from "../images/work/4/4-min.jpg";
import Four5 from "../images/work/4/5-min.jpg";
import Four6 from "../images/work/4/6-min.jpg";

// 5
import Five1 from "../images/work/5/1-min.jpg";
import Five2 from "../images/work/5/2-min.jpg";
import Five3 from "../images/work/5/3-min.jpg";
import Five4 from "../images/work/5/4-min.jpg";

// 6
import Six1 from "../images/work/6/1-min.jpg";
import Six2 from "../images/work/6/2-min.jpg";
import Six3 from "../images/work/6/3-min.jpg";
import Six4 from "../images/work/6/4-min.jpg";

// 7
import Seven1 from "../images/work/7/1-min.jpg";
import Seven2 from "../images/work/7/2-min.jpg";
import Seven3 from "../images/work/7/3-min.jpg";
import Seven4 from "../images/work/7/4-min.jpg";
import Seven5 from "../images/work/7/5-min.jpg";

// 8
import Eight1 from "../images/work/8/1-min.jpg";
import Eight2 from "../images/work/8/2-min.jpg";
import Eight3 from "../images/work/8/3-min.jpg";
import Eight4 from "../images/work/8/4-min.jpg";

export interface WorkExample {
  id: number;
  img: ImageMetadata;
  title: string;
  desc: string[];
  additionalImages: ImageMetadata[];
}

export const examplesOfWork: WorkExample[] = [
  {
    id: 1,
    img: One1,
    title: "Title (1)",
    desc: ["Description (1)"],
    additionalImages: [One1, One2, One3, One4, One5, One6],
  },
  {
    id: 2,
    img: Two1,
    title: "Title (2)",
    desc: ["Description (2)"],
    additionalImages: [Two1, Two2, Two3, Two4, Two5, Two6],
  },
  {
    id: 3,
    img: Three1,
    title: "Title (3)",
    desc: ["Description (3)"],
    additionalImages: [Three1, Three2, Three3, Three4, Three5, Three6],
  },
  {
    id: 4,
    img: Four1,
    title: "Title (4)",
    desc: ["Description (4)"],
    additionalImages: [Four1, Four2, Four3, Four4, Four5, Four6],
  },
  {
    id: 5,
    img: Five1,
    title: "Title (5)",
    desc: ["Description (5)"],
    additionalImages: [Five1, Five2, Five3, Five4],
  },
  {
    id: 6,
    img: Six1,
    title: "Title (6)",
    desc: ["Description (6)"],
    additionalImages: [Six1, Six2, Six3, Six4],
  },
  {
    id: 7,
    img: Seven1,
    title: "Title (7)",
    desc: ["Description (7)"],
    additionalImages: [Seven1, Seven2, Seven3, Seven4, Seven5],
  },
  {
    id: 8,
    img: Eight1,
    title: "Title (8)",
    desc: ["Description (8)"],
    additionalImages: [Eight1, Eight2, Eight3, Eight4],
  },
];
