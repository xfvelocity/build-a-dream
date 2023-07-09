import React from "react";

// ** Composables **
import { initObserver } from "../../../../composables/intersectionObserver";

// ** Styles **
import "./About.scss";

// ** Components **
import BdBanner from "../../../Banner/BdBanner";

interface AboutFact {
  title: string;
  desc: string;
}

const About = () => {
  const { inView } = initObserver("about");

  const aboutFacts: AboutFact[] = [
    {
      title: "30+",
      desc: "years experience",
    },
    {
      title: "200+",
      desc: "clients",
    },
  ];

  return (
    <div className={`about ${inView ? "about-in-view" : ""}`} id="about">
      <div className="bd-max-width xf-grid xf-py-md-15">
        <div className="xf-col-12 xf-col-md-7 xf-text-18-xl">
          <BdBanner class-names="xf-mx-auto xf-mx-md-0">About us</BdBanner>

          <p className="xf-my-4 xf-mt-lg-6">
            At our landscaping company, we are dedicated to transforming
            ordinary outdoor spaces into extraordinary landscapes. With our
            passion for creating stunning and functional designs, we offer a
            wide range of services to meet all of your landscaping needs. From
            expert landscape design and installation to meticulous lawn
            maintenance and care, we strive for excellence in every project.
          </p>

          <p>
            Our team of skilled professionals takes pride in their craftsmanship
            and attention to detail, ensuring that each landscape we create is a
            masterpiece. With a commitment to customer satisfaction, we work
            closely with you to bring your vision to life and exceed your
            expectations.
          </p>
        </div>

        <div className="about-facts xf-col-12 xf-col-md-3 xf-col-offset-md-9 xf-col-lg-3 xf-col-offset-lg-10 xf-col-offset-xl-9 xf-mt-6 xf-mt-md-10 xf-mt-xl-15">
          {aboutFacts.map((fact, i) => (
            <div
              className={`about-item xf-bg-primary xf-p-3 xf-py-6 xf-py-lg-6 xf-text-center xf-mb-2`}
              key={i}
            >
              <p className="xf-text-colour-white xf-text-24 xf-text-28-lg xf-fw-700">
                {fact.title}
              </p>
              <p className="xf-text-colour-grey-lighten-1">{fact.desc} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
