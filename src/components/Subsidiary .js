import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subsidiaries = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div id="subsidiaries" className="section subsidiaries-sec">
      <div className="container">
        <p data-aos="fade-up" className="section-head">
          Our <span className="bright">Subsidiary</span> Companies
        </p>
        <br />
      </div>

      <div
        id="subsidiaryCarousel"
        className="carousel slide carousel-fade pointer-event"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#subsidiaryCarousel"
            data-bs-slide-to="0"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#subsidiaryCarousel"
            data-bs-slide-to="1"
            className="active"
            aria-current="true"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#subsidiaryCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#subsidiaryCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* Estate Masters */}
          <div className="carousel-item overlay-me estate" data-bs-interval="3000">
            <img style={{filter: 'brightness(40%)' }} src="https://indigin.com.gh/img/estate.webp" className="d-block w-100 banner-img" alt="Estate" />
            <div className="carousel-caption">
              <div data-aos="fade-up" className="heading">
                <h1 className="fw-bold text-white">
                  <img style={{height:'100px', paddingBottom:'70px'}} src="https://indigin.com.gh/img/estate_logo.png" alt="Estate Logo" />
                </h1>
              </div>
              <p data-aos="fade-up" className="paragraph">
                Estate Masters is a reputable real estate company with a nine-year track record of
                providing genuine lands. With a team of approximately 30 dedicated professionals,
                Estate Masters has established itself as a trusted player in the real estate market.
              </p>
              <a
                href="https://estatemastersgh.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                className="btn btn-primary btn-anim trans em"
              >
                explore company <span className="material-symbols-outlined">east</span>
              </a>
            </div>
          </div>

          {/* Hanex Weks */}
          <div
            className="carousel-item overlay-me hanex active"
            data-bs-interval="3000"
          >
            <img style={{filter: 'brightness(40%)' }} src="https://indigin.com.gh/img/hanex.webp" className="d-block w-100 banner-img" alt="Hanex" />
            <div className="carousel-caption">
              <div data-aos="fade-up" className="heading">
                <h1 className="fw-bold text-white">
                  <img style={{height:'150px', paddingBottom:'70px'}} src="https://indigin.com.gh/img/hanex_logo.png" alt="Hanex Logo" />
                </h1>
              </div>
              <p data-aos="fade-up" className="paragraph">
                Hanex Weks is a dynamic construction company offering a comprehensive range of
                services, including home constructions, pergola designs, swimming pool, paving,
                woodworks, Alucuboard cladding, renovations, glazing works, and kitchen cabinet
                installations.
              </p>
             <a
  href="https://hanexweks.com"
  target="_blank"
  rel="noopener noreferrer"
  data-aos="fade-up"
  className="btn btn-primary btn-anim trans hw d-flex align-items-center justify-content-center gap-2"
  style={{
    color: 'black',
    fontWeight: 'bold',
    borderRadius: '40px',
    backgroundColor: 'white',
    height: '60px',
    width:'250px',
    padding: '0 24px',
    textAlign: 'center',
  }}
>
  explore company
  <span
    className="material-symbols-outlined"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',      // black background
      color: '#fff',                // white arrow
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      fontSize: '18px',
      transform: 'rotate(0deg)', // rotate arrow to point left
    }}
  >
    east
  </span>
</a>

            </div>
          </div>

          {/* Nestas */}
          <div className="carousel-item overlay-me nestas" data-bs-interval="3000">
            <img style={{filter: 'brightness(40%)' }} src="https://indigin.com.gh/img/nestas.jpeg" className="d-block w-100 banner-img" alt="Nestas" />
            <div className="carousel-caption">
              <div data-aos="fade-up" className="heading">
                <h1 className="fw-bold text-white">
                  <img style={{height:'100px', paddingBottom:'70px'}} src="https://indigin.com.gh/img/nestas_logo.svg" alt="Nestas Logo" />
                </h1>
              </div>
              <p data-aos="fade-up" className="paragraph">
                Nestas is a forward-thinking real estate company specializing in the construction
                and sale of eco-friendly houses. With a focus on sustainability and innovation,
                Nestas contributes to environmentally conscious living spaces.
              </p>
              <a
                href="https://nestas.com.gh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-anim trans np"
              >
                explore company <span className="material-symbols-outlined">east</span>
              </a>
            </div>
          </div>

          {/* Dwellys */}
          <div className="carousel-item overlay-me dwellys" data-bs-interval="3000">
            <img style={{filter: 'brightness(40%)' }} src="https://indigin.com.gh/img/dwellys.jpg" className="d-block w-100 banner-img" alt="Dwellys" />
            <div className="carousel-caption">
              <div data-aos="fade-up" className="heading">
                <h1 className="fw-bold text-white">
                  <img style={{height:'150px', paddingBottom:'70px'}} src="https://indigin.com.gh/img/dwellys_logo.png" alt="Dwellys Logo" />
                </h1>
              </div>
              <p data-aos="fade-up" className="paragraph">
                Dwellys is a cutting-edge online listing platform that revolutionizes property
                advertising. Whether it's houses for sale or rent, Dwellys provides a user-friendly
                platform to connect property owners and prospective buyers or tenants.
              </p>
              <a
                href="https://dwellys.com"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                className="btn btn-primary btn-anim trans di"
              >
                explore company <span className="material-symbols-outlined">east</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsidiaries;
