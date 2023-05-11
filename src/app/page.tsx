import Image from "next/image";

import "./styles/home.scss";

// Content
import Services from "../content/services";
import Social from "../content/social";

// Components
import BdButton from "../components/Button/BdButton";
import BdBanner from "@/components/Banner/BdBanner";
import HeaderCarousel from "@/components/Carousel/HeaderCarousel";
import OurWorkCarousel from "@/components/Carousel/OurWorkCarousel";

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
        <HeaderCarousel />

        <div className="home-header-text-container">
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

          {/* TODO: 
          - Social icons
          */}
        </div>
      </div>

      {/*  About */}
      <div className="home-about">
        <div className="bd-max-width">
          <BdBanner>About us</BdBanner>

          <p className="xf-my-4">
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

        <div className="xf-grid xf-mt-6">
          {aboutFacts.map((fact, i) => (
            <div
              className={`home-about-item xf-bg-primary xf-p-3 xf-text-center ${
                i == 2 ? "xf-col-12" : "xf-col-6"
              }`}
              key={i}
            >
              <h4 className="xf-text-colour-white xf-text-20">{fact.title} </h4>
              <p className="xf-text-colour-grey-lighten-1">{fact.desc} </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="home-services">
        <div className="home-services-content bd-max-width xf-py-10">
          <div className="xf-text-center">
            <h2>Our Services</h2>
            <p>
              We provide a diverse range of services, some of which include:
            </p>
          </div>

          <div className="home-services-item-container xf-mt-6">
            {Services.map((service, i) => (
              <div className={`home-services-item xf-p-6 xf-mb-2`} key={i}>
                <div className="xf-flex xf-flex-align-items-center xf-mb-3">
                  <div
                    className={`home-services-item-icon xf-mr-2 xf-bg-${service.colour}`}
                  >
                    {/* TODO: Update to use icon */}
                    <Image
                      className="xf-center"
                      src={service.icon}
                      alt=""
                      height="12"
                    />
                  </div>

                  <h3 className="xf-text-20 xf-mb-0">{service.title}</h3>
                </div>

                <p className="xf-text-12">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  Our Work */}
      <div className="home-our-work">
        <div className="bd-max-width xf-py-15">
          <OurWorkCarousel />
        </div>
      </div>

      {/* Contact us */}
      <div className="home-contact">
        <div className="bd-max-width xf-pt-10 xf-pb-15">
          <div className="xf-text-center xf-mb-6">
            <h3 className="xf-text-24">Looking for a free quote?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi elit. Praesent proin
              ac bibendum.
            </p>
          </div>

          {Social.map((s, i) => (
            <div className="xf-flex xf-flex-align-items-center xf-mb-3" key={i}>
              <div className="home-contact-icon xf-bg-white xf-mr-3">
                {/* TODO: Update to use icon */}
                <Image className="xf-center" src={s.icon} alt="" />
              </div>

              <div>
                <h4>{s.name}</h4>
                <p>{s.value}</p>
              </div>
            </div>
          ))}

          <div className="xf-mt-8 xf-bg-white home-contact-form xf-text-colour-secondary xf-p-6 xf-pb-8 xf-w-100">
            <div className="xf-mb-2">
              <label>Name</label>
              <input type="text" placeholder="John Smith" />
            </div>

            <div className="xf-mb-2">
              <label>Email Address</label>
              <input type="text" placeholder="john@gmail.com" />
            </div>

            <div className="xf-mb-2">
              <label>Phone Number</label>
              <input type="text" placeholder="07400 820600" />
            </div>

            <div className="xf-mb-2">
              <label>Message</label>
              <textarea placeholder="Write your query here.." rows={5} />
            </div>

            <BdButton backgroundColour="primary" textColour="white" fullWidth>
              Send your message
            </BdButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
