import React from "react";
import { useMediaQuery } from "../../../../composables/mediaQueries";

// Styles
import "./Services.scss";

// Content
import Content from "../../../../content/services";

const Services = () => {
  const { isMedium } = useMediaQuery();

  return (
    <div className="services">
      <div className="services-content bd-max-width xf-py-10">
        <div className="xf-text-center">
          <h2 className="xf-text-32-lg">Our Services</h2>
          <p>We provide a diverse range of services, some of which include:</p>
        </div>

        <div className="services-item-container xf-mt-6 xf-mt-lg-10 xf-grid">
          {Content.map((service, i) => (
            <div
              className={`xf-col-12 xf-col-md-6 xf-col-xl-4 services-item xf-p-6 xf-mb-2`}
              key={i}
            >
              <div className="xf-flex xf-flex-align-items-center xf-mb-3">
                <div
                  className={`services-item-icon xf-mr-2 xf-mr-lg-3 xf-bg-${service.colour}`}
                >
                  <img
                    className="xf-center"
                    src={service.icon}
                    alt=""
                    height={isMedium ? 18 : 14}
                  />
                </div>

                <h3 className="xf-text-20 xf-mb-0">{service.title}</h3>
              </div>

              <p className="xf-text-12 xf-text-14-lg">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
