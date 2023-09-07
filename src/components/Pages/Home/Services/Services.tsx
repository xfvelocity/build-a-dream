import React from "react";
import { ReactSVG } from "react-svg";

// ** Composables **
import { useMediaQuery } from "../../../../composables/mediaQueries";
import { initObserver } from "../../../../composables/intersectionObserver";

// ** Styles **
import "./Services.scss";

// ** Content **
import Content from "../../../../content/services";

const Services = () => {
  // ** Data **
  const { inView } = initObserver("services-title");
  const { isMedium, isExtraLarge } = useMediaQuery();

  let itemsInView: { inView: boolean }[] = [];

  Content.forEach((_c, i) => {
    itemsInView[i] = initObserver(`services-item-${i}`);
  });

  return (
    <div className="services">
      <div className="services-content bd-max-width xf-py-15">
        <div
          id="services-title"
          className={`services-title xf-text-center transition ${
            inView ? "transition-in-view" : ""
          }`}
        >
          <h2 className="xf-text-28 xf-mb-1 xf-text-32-lg xf-text-44-xl xf-fw-700">
            Our Services
          </h2>
          <p className="xf-text-14 xf-text-18-xl">
            We provide a diverse range of services, some of which include:
          </p>
        </div>

        <div className="services-item-container xf-mt-6 xf-mt-lg-10 xf-grid">
          {Content.map((service, i) => (
            <div
              id={`services-item-${i}`}
              className={`xf-col-12 xf-col-md-6 xf-col-xl-4 services-item xf-p-6 xf-mb-2 transition ${
                itemsInView[i]?.inView ? "transition-in-view" : ""
              }`}
              key={i}
            >
              <div className="xf-flex xf-flex-align-items-center xf-mb-3">
                <div
                  className={`services-item-icon xf-mr-2 xf-mr-lg-3 xf-bg-${service.colour}`}
                >
                  <ReactSVG
                    className="xf-center"
                    src={`icons/${service.icon}.svg`}
                    height={isExtraLarge ? 22 : isMedium ? 18 : 14}
                    style={{ marginTop: "3px" }}
                  />
                </div>

                <h3 className="xf-text-20 xf-mb-0 xf-text-24-xl xf-fw-600">
                  {service.title}
                </h3>
              </div>

              <p className="xf-text-12 xf-text-14-lg xf-text-16-xl">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
