import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const valuesData = [
  {
    iconClass: "fa-regular fa-handshake",
    title: "Acceptance",
    description: "Embracing diversity and inclusivity",
  },
  {
    iconClass: "fa-solid fa-check",
    title: "Honesty",
    description: "Upholding transparency and integrity",
  },
  {
    iconClass: "fa-solid fa-hand-fist",
    title: "Resilience",
    description: "Navigating challenges with strength and adaptability",
  },
  {
    iconClass: "fa-solid fa-fire",
    title: "Passion",
    description: "Fueled by enthusiasm for excellence",
  },
  {
    iconClass: "fa-solid fa-bullseye",
    title: "Ambition",
    description: "Striving for continuous growth and innovation",
  },
  {
    iconClass: "fa-solid fa-search",
    title: "Focus",
    description: "Concentrating on delivering exceptional results",
  },
  {
    iconClass: "fa-regular fa-face-smile",
    title: "Optimism",
    description: "Approaching challenges with a positive mindset",
  },
  {
    iconClass: "fa-solid fa-recycle",
    title: "Change",
    description: "Embracing evolution and adaptation",
  },
  {
    iconClass: "fa-solid fa-star",
    title: "Motivation",
    description: "Igniting drive and determination",
  },
  {
    iconClass: "fa-solid fa-heart",
    title: "Care",
    description: "Nurturing relationships and communities",
  },
  {
    iconClass: "fa-solid fa-handshake-angle",
    title: "Support",
    description: "Standing together and uplifting one another",
  },
  {
    iconMaterial: "partner_exchange",
    title: "Unity",
    description:
      "Promoting solidarity within the organization and community",
  },
];

const ValuesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="values" className="section values-sec min-section">
      <div className="container">
        <div className="values-header py-3">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div data-aos="fade-up" className="company-info mb-5">
                <p className="section-head">
                  <span className="bright">Leadership &amp;</span>&nbsp;Core Values
                </p>
              </div>
              <p data-aos="fade-up" className="paragraph">
                Under the visionary leadership of Mr. Francis Nesta Opey and the
                strategic guidance of the executive committee, Indigin Group shapes
                the real estate landscape with a commitment to strong core values and
                principles.
              </p>
            </div>


            <div data-aos="fade-up" className="col-lg-5 text-lg-end text-center">
              <img
                src="/img/indigin_icon_outline.webp"
                className="opacity-25"
                height="150"
                alt="Indigin Icon"
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="values-content py-3">
          <div className="row">
            {valuesData.map(({ iconClass, iconMaterial, title, description }, idx) => (
              <div key={idx} className="col-lg-4 mb-4">
                <div className="row value-item align-items-center">
                  <div className="col-sm-2 text-center">
                    {iconClass ? (
                      <h1 data-aos="fade-up" className="mb-0">
                        <i className={iconClass} style={{ color: "green" }} aria-hidden="true"></i>
                      </h1>
                    ) : (
                      <h1 data-aos="fade-up" className="mb-0">
                        <span
                          className="material-symbols-outlined"
                          style={{ color: "green", fontSize: "2.5rem" }}
                          aria-hidden="true"
                        >
                          {iconMaterial}
                        </span>
                      </h1>
                    )}
                  </div>
                  <div className="col-sm-10">
                    <h5 data-aos="fade-up">{title}</h5>
                    <p data-aos="fade-up" className="mb-0">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
