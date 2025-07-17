import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Founder = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{paddingTop:'30px'}} id="founder" className="section about-sec min-section">
      <div className="container">
        <div className="company-info p-0 pb-5 text-end">
          <p data-aos="fade-up" className="section-head">
            The <span className="bright">Founder's Vision</span>
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div data-aos="fade-up" className="img-box-lg">
              <img style={{borderRadius:'20px'}} src="https://indigin.com.gh/img/md.jpeg" className="img-fluid" alt="Founder" />
            </div>
          </div>
          <div style={{paddingLeft:'50px' ,borderRadius:'10px', width: '66.6%',backgroundColor:'#fff9ed', padding: '3em', color:'#737878', fontSize:'20px'}} className="col-lg-8">
            <div data-aos="fade-up" className="sub-sec">
              <p data-aos="fade-up" className="title-paragraph">
                Mr. Francis Nesta Opey, the visionary leader behind Indigin Group, envisions a
                <br/> future where the real estate industry combines innovation with sustainability. His 
                <br/> leadership has been instrumental in steering the group and its subsidiaries 
                <br/> towards achieving this vision.
              </p>
              <br />
              <p data-aos="fade-up" className="title-paragraph">
                Indigin Group thrives on resilience, embodying a spirit that has not only weathered 
                <br/>industry challenges but has also restored hope, trust, and loyalty. In an industry 
                <br/> where such values are paramount, Indigin Group's commitment to acceptance, 
                <br/> honesty, resilience, passion, ambition, focus and optimism defines our brand.
              </p>
              <br />
              <p data-aos="fade-up" className="title-paragraph">
                The Group name for Estate Masters, Hanex Weks, Dwellys, and Nestas Limited. The 
                <br/> main inspiration for the origin of the name 
                <br/> ‘INDIGIN’ was deduced from the word ‘INDIGENE’ – native/indigenous...
              </p>
            </div>
          </div>
 <div className="px-4 py-4">
              <h4 data-aos="fade-up" className="fw-light grey-accent mb-0">
                <span className="fw-light">Francis N.</span> <span className="fw-semibold">Opey</span>
              </h4>
              <p data-aos="fade-up" className="green text-uppercase fw-semibold">
                Founder & CEO
              </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Founder;
