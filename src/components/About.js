import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const About = () => {
  return (
    <>
      {/* About Section */}
      <div style={{paddingTop:'100px'}} className="section company-info-sec">
        <div id="about" className="container">
          <div className="row">
            
            <div style={{paddingLeft:'50px' ,borderRadius:'10px', width: '66.6%',backgroundColor:'#fff9ed', padding: '3em',color:'#737878'}} className="col-lg-8">
              <div className="company-info bg-grey" data-aos="fade-up">
                <p style={{fontWeight:'bold', color:'#737878'}} className="section-head">
                  About <span className="bright">Us</span>
                </p>
                <p  className="paragraph">
    Indigin Group Ltd is the umbrella body of a number of companies with business offerings across diverse <br/>
     sectors, thus real estate, land development and estate, construction and civil engineering, real estate<br/>
      marketing, commodities etc.
                </p>
                <p  className="ashtext">
                  Indigin Group was founded by the current Executive Director Francis Nesta Opey. The group is driven by a <br/> 
                  commitment to creating sustainable and innovative solutions in every sector it operates in
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-box" data-aos="fade-up">
                <img style={{height:'200px', width:'450px', borderRadius:'10px'}} src="https://indigin.com.gh/img/info.jpg" className="img-fluid" alt="Info" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div style={{paddingTop:'100px'}} className="section about-sec">
        <div className="container">
          <div className="row">
            {/**Images */}
            <div className="col-lg-4">
              <div className="img-box-lg" data-aos="fade-up">
                <img style={{height:'400px',width:'400px',borderRadius:'10px'}} src="https://indigin.com.gh/img/building.png" className="img-fluid" alt="Building" />
              </div>
            </div>
               {/*Text */}
            <div style={{paddingLeft:'50px' ,borderRadius:'10px', width: '66.6%',backgroundColor:'#fff9ed', padding: '3em',color:'#737878'}} className="col-lg-8">
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
                        To ensure continuous success of all subsidiaries in spite of the economic climate in all
                        <br/> countries we are present in.
                      </p>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-1">
                      <div  className="icon" data-aos="fade-right">
                        <span  className="material-symbols-outlined">mountain_flag</span>
                      </div>
                    </div>
                    <div className="col-sm-11">
                      <p className="title" data-aos="fade-left">Our Mission</p>
                      <p className="paragraph" data-aos="fade-left">
                        Indigin group envisions investment in diverse industries through subsidiary businesses
                        <br/> and harmonising under the umbrella of Indigin, ensuring optimum level corporate
                        <br/> governance and to be as an African business group that would transcend generations.
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
