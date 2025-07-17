import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Story = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <style>{`
        .timeline {
          list-style: none;
          padding: 0;
          position: relative;
          max-width: 900px;
          margin: 40px auto;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: #ddd;
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          box-sizing: border-box;
        }

        .timeline-item:nth-child(odd) {
          left: 0;
          text-align: right;
        }

        .timeline-item:nth-child(even) {
          left: 50%;
          text-align: left;
        }

        .timeline-marker {
          position: absolute;
          top: 30px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px green;
          z-index: 2;
        }

        .timeline-item:nth-child(odd) .timeline-marker {
          right: -10px;
        }

        .timeline-item:nth-child(even) .timeline-marker {
          left: -10px;
        }

        .timeline-marker::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 200vw; /* extra wide for connecting line */
          height: 4px;
          background:green;
          transform: translateY(-50%);
          z-index: -1;
        }

        .timeline-item:last-child .timeline-marker::after {
          display: none;
        }

        .timeline-content {
          background: #f8f9fa;
          padding: 15px 25px;
          border-radius: 6px;
          display: inline-block;
          max-width: 400px;
        }

        .timeline-item.period {
          width: 100%;
          text-align: center;
          padding: 40px 0;
        }

        .timeline-item.period .timeline-marker {
          display: none;
        }

        .timeline-item.period .timeline-title {
          font-size: 2rem;
          font-weight: bold;
          color: green;
          margin: 0;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 8px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 30px;
            padding-right: 15px;
            text-align: left !important;
            left: 0 !important;
          }
          .timeline-item:nth-child(odd) .timeline-marker,
          .timeline-item:nth-child(even) .timeline-marker {
            left: 0 !important;
            right: auto !important;
          }
          .timeline-marker::after {
            display: none;
          }
        }
      `}</style>

      <div id="our_story" className="section story-sec">
        <div className="container">
          <div className="company-info header">
            <div className="text-center">
              <p data-aos="fade-up" className="section-head aos-init aos-animate">
                Our <span className="bright">Story</span>
              </p>
              <br />
              <p data-aos="fade-up" className="story-para aos-init aos-animate">
                Indigin Group has attained lot of successes since inception. The Group
                boasts of one of the best Estate companies in Ghana-Estate Masters ltd
                selling lands to over 5,000 people in Ghana and abroad. Here are some
                great achievements attained by the Group worth noting
              </p>
            </div>
          </div>

          <ul className="timeline timeline-centered">
            {/* 2019 Period */}
            <li className="timeline-item period">
              <div data-aos="fade-up" className="timeline-info aos-init"></div>
              <div data-aos="fade-up" className="timeline-marker aos-init"></div>
              <div data-aos="fade-up" className="timeline-content aos-init">
                <h2 className="timeline-title">2019</h2>
              </div>
            </li>

            {/* April 2019 */}
            <li className="timeline-item" data-aos="fade-up">
              <div className="timeline-info aos-init">
                <span>April 2019</span>
              </div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content">
                <h4 className="timeline-title aos-init">
                  Inauguration of Multi-purpose head office edifice
                </h4>
                <p className="aos-init">
                  In April 2019, the Group purchased and inaugurated a multipurpose
                  edifice for one of its subsidiaries- Kings City Real Estate Limited
                  (now Estate Masters ltd) to help carry out operational functions after
                  operating in a rented office for over 3years. This edifice enhanced
                  departmental grouping in facilitating operational functions of the
                  company and also boost morale of clients in doing business with us.
                </p>
              </div>
            </li>

            {/* 2019 rebranding */}
            <li className="timeline-item" data-aos="fade-up">
              <div className="timeline-info aos-init">
                <span>2019</span>
              </div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content">
                <h4 className="timeline-title aos-init">Re-branding of Hanex weks</h4>
                <p className="aos-init">
                  Indigin Group started experiencing immense growth after the
                  Construction wing of the Group called Jcw ltd was rebranded to Hanex
                  weks ltd and fully functional alongside the Estate wing. The purpose
                  (intent) was to offer construction services to land buyers of the
                  estate wing-Estate masters as well as external estate companies,
                  individuals and corporate entities This move expanded the company’s
                  operations by adding more services and also widened its customer base.
                </p>
              </div>
            </li>

            {/* 2021 Period */}
            <li className="timeline-item period">
              <div className="timeline-info aos-init"></div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content aos-init">
                <h2 className="timeline-title">2021</h2>
              </div>
            </li>

            {/* 2021 Kasoa branch */}
            <li className="timeline-item" data-aos="fade-up">
              <div className="timeline-info aos-init">
                <span>2021</span>
              </div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content">
                <h4 className="timeline-title aos-init">Inauguration of Kasoa branch</h4>
                <p className="aos-init">
                  2021 saw a massive achievement by the Group when the kasoa branch of
                  Estate Masters was inaugurated. This milestone leveraged the clientele
                  base of the Group (company) and also led to acquisition of lands in
                  Kasoa and its environs thereby, increasing the product line and
                  stretching brand’s recognition.
                </p>
              </div>
            </li>

            {/* 2021 Dwellys re-brand */}
            <li className="timeline-item" data-aos="fade-up">
              <div className="timeline-info aos-init">
                <span>2021</span>
              </div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content">
                <h4 className="timeline-title aos-init">Dwellys re-branded</h4>
                <p className="aos-init">
                  Again, the Group rebranded one of its subsidiaries- Dwellys into an
                  online property selling and renting platform, formerly a property
                  brokerage firm. This brand has been intentionally crafted to transform
                  and elevate the property buying, selling, and renting experience for
                  both real estate professionals and individuals seeking their dream
                  properties.
                </p>
              </div>
            </li>

            {/* 2023 Period */}
            <li className="timeline-item period">
              <div className="timeline-info aos-init"></div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content aos-init">
                <h2 className="timeline-title">2023</h2>
              </div>
            </li>

            {/* 2023 Building estate */}
            <li className="timeline-item" data-aos="fade-up">
              <div className="timeline-info aos-init">
                <span>2023</span>
              </div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content">
                <h4 className="timeline-title aos-init">
                  Commence Building of premium estate Houses
                </h4>
                <p className="aos-init">
                  In 2023, Nestas, one of Indigin Group wing acquired vast acres of land
                  in the Tema community 26 enclave and currently building modern and
                  luxurious affordable estate houses for sale. The intent seeks to
                  reduce housing deficit currently facing the Ghanaian economy and also
                  provide a serene environment for families to live in. This premium
                  estate community is designed to elevate the standard of luxury living
                  in Ghana.
                </p>
              </div>
            </li>

            {/* 2023 Awards */}
            <li className="timeline-item" data-aos="fade-up">
              <div className="timeline-info aos-init">
                <span>2023</span>
              </div>
              <div className="timeline-marker aos-init"></div>
              <div className="timeline-content">
                <h4 className="timeline-title aos-init">Awards/Accolades</h4>
                <p className="aos-init">
                  The Group CEO, Mr. Francis Nesta Opey later this year September 2023,
                  received an award in Kenya for the ‘Most Outstanding African in
                  Industrial Real Estate’. This recognition has pitched the brand in the
                  continental stage.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Story;
