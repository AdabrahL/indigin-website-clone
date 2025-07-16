import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ValuesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const values = [
    { icon: 'fa-regular fa-handshake', title: 'Acceptance', desc: 'Embracing diversity and inclusivity' },
    { icon: 'fa-solid fa-check', title: 'Honesty', desc: 'Upholding transparency and integrity' },
    { icon: 'fa-solid fa-hand-fist', title: 'Resilience', desc: 'Navigating challenges with strength and adaptability' },
    { icon: 'fa-solid fa-fire', title: 'Passion', desc: 'Fueled by enthusiasm for excellence' },
    { icon: 'fa-solid fa-bullseye', title: 'Ambition', desc: 'Striving for continuous growth and innovation' },
    { icon: 'fa-solid fa-search', title: 'Focus', desc: 'Concentrating on delivering exceptional results' },
    { icon: 'fa-regular fa-face-smile', title: 'Optimism', desc: 'Approaching challenges with a positive mindset' },
    { icon: 'fa-solid fa-recycle', title: 'Change', desc: 'Embracing evolution and adaptation' },
    { icon: 'fa-solid fa-star', title: 'Motivation', desc: 'Igniting drive and determination' },
    { icon: 'fa-solid fa-heart', title: 'Care', desc: 'Nurturing relationships and communities' },
    { icon: 'fa-solid fa-handshake-angle', title: 'Support', desc: 'Standing together and uplifting one another' },
    { icon: 'material-symbols-outlined', title: 'Unity', desc: 'Promoting solidarity within the organization and community' }
  ];

  return (
    <div id="values" className="section values-sec min-section">
      <div className="container">
        <div className="values-header py-3">
          <div className="row">
            <div className="col-lg-7">
              <div data-aos="fade-up" className="company-info mb-5">
                <p className="section-head">
                  <span className="bright">Leadership &amp;</span>&nbsp;Core Values
                </p>
              </div>
              <p data-aos="fade-up" className="paragraph">
                Under the visionary leadership of Mr. Francis Nesta Opey and the strategic guidance of the executive committee, Indigin Group shapes the real estate landscape with a commitment to strong core values and principles.
              </p>
            </div>
            <div data-aos="fade-up" className="col-lg-5 text-end">
              <img src="/img/indigin_icon_outline.webp" className="opacity-25" height="150px" alt="Indigin Icon" />
            </div>
          </div>
        </div>

        <hr />

        <div className="values-content py-3">
          <div className="row">
            {values.map((val, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="row value-item">
                  <div className="col-sm-2">
                    <h1 data-aos="fade-up">
                      <span className={val.icon}></span>
                    </h1>
                  </div>
                  <div className="col-sm-10">
                    <h5 data-aos="fade-up">{val.title}</h5>
                    <p data-aos="fade-up">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
