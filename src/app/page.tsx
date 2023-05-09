import Image from "next/image";

import "../assets/styles/pages/home.scss";
import HeaderImage from "../assets/images/header.png";
import BdButton from "../components/Button/BdButton";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
