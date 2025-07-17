import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const socialButtonBaseStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#e0e0e0',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  cursor: 'pointer',
};

const socialButtonHoverStyle = {
  backgroundColor: '#ccc',
  transform: 'scale(1.05)',
};

const socialsIconStyle = {
  color: '#333',
};

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // We'll keep track of which social button is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socials = [
    { href: 'https://www.linkedin.com/company/', iconClass: 'fa fa-linkedin', key: 'linkedin' },
    { href: 'https://web.facebook.com/', iconClass: 'fa fa-facebook', key: 'facebook' },
    { href: 'https://www.instagram.com/', iconClass: 'fa fa-instagram', key: 'instagram' },
    { href: 'https://www.tiktok.com/', iconClass: 'fa-brands fa-tiktok', key: 'tiktok' },
  ];

  return (
    <footer style={{backgroundColor:'green', color:'white'}} className="footer-sec" id="contact">
      <div className="section foot-content py-5">
        <div className="container">
          <div className="row text-start">
            {/* Logo and Copyright */}
            <div className="col-lg-4 col-md-4 mb-4">
              <img
  data-aos="fade-up"
  src="https://indigin.com.gh/img/logo.svg"
  alt="Indigin Logo"
  height="70"
  className="logoIcon mb-3"
  style={{ filter: 'invert(1) brightness(100)' }}
/>

              <p data-aos="fade-up">Copyright © 2024, Indigin</p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="links">
                <h5 data-aos="fade-up">Quick Links</h5>
                <ul className="list-unstyled">
                  {['Home', 'About Us', 'Founder', 'Values', 'Contact Us'].map((link, i) => (
                    <li key={i} data-aos="fade-up">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="links">
                <h5 data-aos="fade-up">Connect With Us</h5>
                <ul className="list-unstyled">
                  <li data-aos="fade-up">Community 25, Estate Masters Building, Tema</li>
                  <li data-aos="fade-up">
                    <b>E</b> - info@indigin.com.gh
                  </li>
                  <li data-aos="fade-up">
                    <b>T</b> - +233 24 3370 356
                  </li>
                </ul>

                {/* Social Icons */}
                <div data-aos="fade-up" className="socials d-flex gap-3 mt-3">
                  {socials.map(({ href, iconClass, key }, index) => (
                    <a
                      href={href}
                      key={key}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        style={{
                          ...socialButtonBaseStyle,
                          ...(hoveredIndex === index ? socialButtonHoverStyle : {}),
                        }}
                      >
                        <i className={iconClass} style={socialsIconStyle} aria-hidden="true"></i>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Bottom Footer */}
          <div className="bottom-foot text-center mt-4">
            <p className="mb-0">
              <small>
                Digitally Crafted by{' '}
                <a
                  href="https://davidndanu.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: 'black' }}
                >
                  <hr/>

                  devedem
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
