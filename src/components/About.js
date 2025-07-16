import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = () => {
  return (
    <>
      {/* About Section */}
      <div className="section company-info-sec">
        <div id="about" className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="company-info bg-grey" data-aos="fade-up">
                <p className="section-head">
                  About <span className="bright">Us</span>
                </p>
                <p className="paragraph">
    Indigin Group Ltd is the umbrella body of a number of companies with business offerings across diverse <br/>
     sectors, thus real estate, land development and estate, construction and civil engineering, real estate<br/>
      marketing, commodities etc.
                </p>
                <p className="paragraph">
                  Indigin Group was founded by the current Executive Director Francis Nesta Opey. The group is driven by a commitment to creating sustainable and innovative solutions in every sector it operates in
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-box" data-aos="fade-up">
                <img src="/img/info.jpg" className="img-fluid" alt="Info" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="section about-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="img-box-lg" data-aos="fade-up">
                <img src="/img/building.png" className="img-fluid" alt="Building" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="company-info" data-aos="fade-up">
                <div className="sub-sec">
                  <div className="row">
                    <div className="col-sm-1">
                      <div className="icon" data-aos="fade-right">
                        <span className="fa fa-binoculars"></span>
                      </div>
                    </div>
                    <div className="col-sm-11">
                      <p className="title" data-aos="fade-left">Our Vision</p>
                      <p className="paragraph" data-aos="fade-left">
                        To ensure continuous success of all subsidiaries in spite of economic climate.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-1">
                      <div className="icon" data-aos="fade-right">
                        <span className="material-symbols-outlined">mountain_flag</span>
                      </div>
                    </div>
                    <div className="col-sm-11">
                      <p className="title" data-aos="fade-left">Our Mission</p>
                      <p className="paragraph" data-aos="fade-left">
                        Envisioning diverse investments under one umbrella ensuring corporate governance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div>
    </>
  );
};

export default About;
