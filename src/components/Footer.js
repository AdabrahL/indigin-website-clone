import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer-sec" id="contact">
      <div className="section foot-content">
        <div className="container">
          <div className="row">
            {/* Logo and Copyright */}
            <div className="col-lg-4 col-md-4">
              <img
                data-aos="fade-up"
                className="logoIcon"
                src="/img/logo.svg"
                height="70"
                alt="Indigin Logo"
              />
              <p data-aos="fade-up" className="mt-3">© 2024, Indigin</p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-4">
              <div className="links">
                <h5 data-aos="fade-up">Quick Links</h5>
                <ul className="list-unstyled">
                  <li data-aos="fade-up">Home</li>
                  <li data-aos="fade-up">About Us</li>
                  <li data-aos="fade-up">Founder</li>
                  <li data-aos="fade-up">Values</li>
                  <li data-aos="fade-up">Contact Us</li>
                </ul>
              </div>
            </div>

            {/* Contact Info + Socials */}
            <div className="col-lg-4 col-md-4">
              <div className="links">
                <h5 data-aos="fade-up">Connect With Us</h5>
                <ul className="list-unstyled">
                  <li data-aos="fade-up">Community 25, Estate Masters Building, Tema</li>
                  <li data-aos="fade-up"><b>E</b> - info@indigin.com.gh</li>
                  <li data-aos="fade-up"><b>T</b> - +233 24 3370 356</li>
                </ul>
                <div data-aos="fade-up" className="socials d-flex gap-3 mt-3">
                  <a href="https://www.linkedin.com/company/" target="_blank" rel="noreferrer">
                    <div className="social-button">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </a>
                  <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
                    <div className="social-button">
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <div className="social-button">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
                    <div className="social-button">
                      <FontAwesomeIcon icon={faTiktok} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <br />
          <hr />

          {/* Bottom Note */}
          <div className="bottom-foot">
            <div className="text-center mt-4">
              <p className="mb-0">
                <small>
                  Digitally Crafted by{' '}
                  <a
                    href="https://davidndanu.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: 'black' }}
                  >
                    devedem
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
