import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    
    <>
      {/* Header Section */}
      <header className="header fixed-top">
        <nav className="navbar navbar-expand-lg first-nav">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img style={{ height: '45px' }} src="https://indigin.com.gh/img/logo.svg" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav main-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#founder">
                    Founder
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#values">
                    Values
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      
     <div id="home" className="hero-banner">
        <div id="heroBannerCarousel" className="carousel slide carousel-fade pointer-event" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroBannerCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroBannerCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item" data-bs-interval="3000">
              <img src="https://indigin.com.gh/img/banner.png" className="d-block w-100 banner-img" alt="..." />
              <div className="carousel-caption">
                <div className="heading" data-aos="fade-up">
                  <h1 className="fw-bold text-white">Indigin Group</h1>
                  <h4 className="fw-normal text-white">We're Resilient</h4>
                </div>
                <a href="/#subsidiaries" className="btn btn-primary btn-anim trans" data-aos="fade-up">
                  view subsidiaries <span className="material-symbols-outlined">south</span>
                </a>
              </div>
            </div>
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="https://indigin.com.gh/img/banner2.jpg" className="d-block w-100 banner-img" alt="..." />
              <div className="carousel-caption">
                <div className="heading" data-aos="fade-up">
                  <h1 className="fw-bold text-white">Indigin Group</h1>
                  <h4 className="fw-normal text-white">We're Resilient</h4>
                </div>
                <a href="/#subsidiaries" className="btn btn-primary btn-anim trans" data-aos="fade-up">
                  view subsidiaries <span className="material-symbols-outlined">south</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
