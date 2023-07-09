import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

// ** Composables **
import { useMediaQuery } from "../../../../composables/mediaQueries";
import { initObserver } from "../../../../composables/intersectionObserver";

//  ** Styles **
import "./Contact.scss";

// ** Content **
import Content from "../../../../content/social";

// ** Components **
import BdButton from "../../../Button/BdButton";
import TextInput from "../../../TextInput/TextInput";
import TextArea from "../../../TextArea/TextArea";

const Contact = () => {
  const form = useRef<HTMLFormElement>();

  const { inView } = initObserver("contact");
  const { isExtraLarge } = useMediaQuery();

  const formItems = [
    {
      label: "Name",
      placeholder: "John Smith",
      name: "name",
      type: "text",
    },
    {
      label: "Email Address",
      placeholder: "john@gmail.com",
      name: "email",
      type: "email",
    },
    {
      label: "Phone Number",
      placeholder: "07400820600",
      name: "phone",
      type: "tel",
    },
    {
      label: "Message",
      placeholder: "Write your query here..",
      name: "message",
      type: "text",
    },
  ];

  const submitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_t2y7wm5",
          "contact",

          form.current,
          "oyQQfWCUpZg4ShEo8"
        )
        .then(
          () => {
            window.location.href = "/thank-you";
          },
          () => {
            window.location.href = "/error";
          }
        );
    }
  };

  return (
    <>
      <span id="contact" />

      <div
        className={`contact ${inView ? "contact-in-view" : ""}`}
        id="contact"
      >
        <div className="bd-max-width xf-pt-10 xf-pb-15 xf-pt-md-15 xf-grid">
          <div className="xf-col-12 xf-col-md-6 xf-col-lg-7 xf-col-xl-6 xf-col-offset-xl-2 xf-mt-xl-10">
            <div className="contact-title">
              <h3 className="xf-text-24 xf-text-32-lg xf-text-40-xl xf-fw-600 xf-mb-1">
                Looking for a free quote?
              </h3>
              <p className="contact-title-desc xf-text-14 xf-text-18-xl">
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

          <div className="xf-bg-white contact-form xf-text-colour-secondary xf-p-4 xf-pb-8 xf-px-lg-6 xf-p-xl-10 xf-w-100 xf-col-12 xf-col-md-6 xf-col-offset-lg-8">
            {/* TODO: Implement validation */}
            <form
              ref={form as React.RefObject<HTMLFormElement>}
              onSubmit={submitForm}
            >
              {formItems.map((item, i) => {
                if (item.name === "message") {
                  return (
                    <TextArea
                      key={i}
                      classNames="xf-mb-1 xf-mb-xl-4"
                      label={item.label}
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      required
                    />
                  );
                } else {
                  return (
                    <TextInput
                      key={i}
                      classNames="xf-mb-3 xf-mb-xl-4"
                      label={item.label}
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.name}
                      required
                    />
                  );
                }
              })}

              {/* TODO: Implement reCAPTCHA */}
              {/* <div>
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lf290gmAAAAAIY1DxS9nUbfkI-LQWP71h1HNkY6"
                />
              </div> */}

              <BdButton
                backgroundColour="primary"
                textColour="white"
                fullWidth
                type="submit"
              >
                Send your message
              </BdButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
