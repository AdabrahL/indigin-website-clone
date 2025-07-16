import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Story = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="our_story" className="section story-sec">
      <div className="container">
        <div className="company-info header">
          <div className="text-center">
            <p data-aos="fade-up" className="section-head">
              Our <span className="bright">Story</span>
            </p>
            <br />
            <p data-aos="fade-up" className="story-para">
              Indigin Group has attained lot of successes since inception. The Group boasts of one of the best Estate companies in Ghana-Estate Masters ltd selling lands to over 5,000 people in Ghana and abroad. Here are some great achievements attained by the Group worth noting
            </p>
          </div>
        </div>
        <ul className="timeline timeline-centered">
          <li className="timeline-item period">
            <div data-aos="fade-up" className="timeline-info"></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div data-aos="fade-up" className="timeline-content">
              <h2 className="timeline-title">2019</h2>
            </div>
          </li>

          <li className="timeline-item">
            <div data-aos="fade-up" className="timeline-info"><span>April 2019</span></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 data-aos="fade-up" className="timeline-title">Inauguration of Multi-purpose head office edifice</h4>
              <p data-aos="fade-up">
                In April 2019, the Group purchased and inaugurated a multipurpose edifice for one of its subsidiaries- Kings City Real Estate Limited (now Estate Masters ltd)...
              </p>
            </div>
          </li>

          <li className="timeline-item">
            <div data-aos="fade-up" className="timeline-info"><span>2019</span></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 data-aos="fade-up" className="timeline-title">Re-branding of Hanex weks</h4>
              <p data-aos="fade-up">
                Indigin Group started experiencing immense growth after the Construction wing of the Group called Jcw ltd was rebranded to Hanex weks ltd and fully functional alongside the Estate wing...
              </p>
            </div>
          </li>

          <li className="timeline-item period">
            <div data-aos="fade-up" className="timeline-info"></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div data-aos="fade-up" className="timeline-content">
              <h2 className="timeline-title">2021</h2>
            </div>
          </li>

          <li className="timeline-item">
            <div data-aos="fade-up" className="timeline-info"><span>2021</span></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 data-aos="fade-up" className="timeline-title">Inauguration of Kasoa branch</h4>
              <p data-aos="fade-up">
                2021 saw a massive achievement by the Group when the kasoa branch of Estate Masters was inaugurated...
              </p>
            </div>
          </li>

          <li className="timeline-item">
            <div data-aos="fade-up" className="timeline-info"><span>2021</span></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 data-aos="fade-up" className="timeline-title">Dwellys re-branded</h4>
              <p data-aos="fade-up">
                Again, the Group rebranded one of its subsidiaries- Dwellys into an online property selling and renting platform...
              </p>
            </div>
          </li>

          <li className="timeline-item period">
            <div data-aos="fade-up" className="timeline-info"></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div data-aos="fade-up" className="timeline-content">
              <h2 className="timeline-title">2023</h2>
            </div>
          </li>

          <li className="timeline-item">
            <div data-aos="fade-up" className="timeline-info"><span>2023</span></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 data-aos="fade-up" className="timeline-title">Commence Building of premium estate Houses</h4>
              <p data-aos="fade-up">
                In 2023, Nestas, one of Indigin Group wing acquired vast acres of land in the Tema community 26 enclave and currently building modern and luxurious affordable estate houses...
              </p>
            </div>
          </li>

          <li className="timeline-item">
            <div data-aos="fade-up" className="timeline-info"><span>2023</span></div>
            <div data-aos="fade-up" className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 data-aos="fade-up" className="timeline-title">Awards/Accolades</h4>
              <p data-aos="fade-up">
                The Group CEO, Mr. Francis Nesta Opey later this year September 2023, received an award in Kenya for the ‘Most Outstanding African in Industrial Real Estate’...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Story;
