import Image from "next/image";

import "./styles/home.scss";
import HeaderImage from "../assets/images/header.png";
import BdButton from "../components/Button/BdButton";

const Home = () => {
  const aboutFacts = [
    {
      title: "30+",
      desc: "years experience",
    },
    {
      title: "30+",
      desc: "years experience",
    },
    {
      title: "30+",
      desc: "years experience",
    },
  ];

  return (
    <>
      {/*  Header */}
      <div className="home-header">
        <Image
          src={HeaderImage}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />

        <div className="home-header-text xf-p-6 bd-max-width">
          <h1 className="xf-text-24 xf-mb-4">
            Dream gardens that don’t cost the earth
          </h1>
          <p className="xf-text-12 xf-mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            proin ac bibendum id ut ut suspendisse. Pharetra viverra ipsum non
            viverra consectetur.
          </p>

          <BdButton>View our work</BdButton>
        </div>
      </div>

      {/*  About */}
      <div className="home-about">
        <div className="bd-max-width">
          <h3>About us</h3>

          <p className="xf-mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            proin ac bibendum id ut ut suspendisse. Pharetra viverra ipsum non
            viverra consectetur. Praesent proin ac bibendum id ut ut
            suspendisse. Pharetra viverra ipsum non viverra consectetur.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            proin ac bibendum id ut ut suspendisse. Pharetra viverra ipsum non
            viverra consectetur.
          </p>
        </div>

        <div className="xf-grid xf-my-4">
          {aboutFacts.map((fact, i) => (
            <div
              className={`home-about-item xf-bg-primary xf-p-3 xf-text-center ${
                i == 2 ? "xf-col-12" : "xf-col-6"
              }`}
              key={i}
            >
              <h4 className="xf-text-colour-white">{fact.title} </h4>
              <p className="xf-text-colour-grey-lighten-1">{fact.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
