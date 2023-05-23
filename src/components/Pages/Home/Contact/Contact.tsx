import React from "react";

// Styles
import "./Contact.scss";

// Content
import Content from "../../../../content/social";

// Components
import BdButton from "../../../Button/BdButton";
import { useMediaQuery } from "../../../../composables/mediaQueries";

const Contact = () => {
  const { isExtraLarge } = useMediaQuery();

  return (
    <>
      <a id="contact" />

      <div className="contact">
        <div className="bd-max-width xf-pt-10 xf-pb-15 xf-pt-md-15 xf-grid">
          <div className="xf-col-12 xf-col-md-6 xf-col-offset-xl-2 xf-mt-xl-10">
            <div className="contact-title">
              <h3 className="xf-text-24 xf-text-32-lg xf-text-40-xl xf-fw-600 xf-mb-lg-1">
                Looking for a free quote?
              </h3>
              <p className="contact-title-desc xf-text-18-xl">
                Contact us today for a free quote and let us bring your dream
                landscape to life.
              </p>
            </div>

            <div className="xf-pl-4 xf-my-8 xf-pl-md-0">
              {Content.map((s, i) => (
                <a href={s.href} target="_blank" aria-label={s.title} key={i}>
                  <div className="xf-flex xf-flex-align-items-center xf-mb-3 xf-mb-xl-6">
                    <div className="contact-icon xf-bg-white xf-mr-3">
                      <img
                        className="xf-center"
                        src={s.icon}
                        alt=""
                        width={isExtraLarge ? 24 : "auto"}
                      />
                    </div>

                    <div>
                      <h4 className="xf-fw-600 xf-text-20-xl">{s.title}</h4>
                      <p className="xf-text-18-xl">{s.text}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="xf-bg-white contact-form xf-text-colour-secondary xf-p-6 xf-pb-8 xf-p-xl-10 xf-w-100 xf-col-12 xf-col-md-6 xf-col-offset-lg-8">
            <div className="xf-mb-3 xf-mb-xl-4">
              <label>Name</label>
              <input type="text" placeholder="John Smith" />
            </div>

            <div className="xf-mb-3 xf-mb-xl-4">
              <label>Email Address</label>
              <input type="text" placeholder="john@gmail.com" />
            </div>

            <div className="xf-mb-3 xf-mb-xl-4">
              <label>Phone Number</label>
              <input type="text" placeholder="07400 820600" />
            </div>

            <div className="xf-mb-1 xf-mb-xl-4">
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

export default Contact;
