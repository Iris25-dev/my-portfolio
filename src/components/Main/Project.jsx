import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="proyectos-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <a
              href="https://www.clubmed.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-14.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>Club Med</h3>
              <p>
                Club Med is a global provider of all-inclusive resorts, offering
                vacation packages
              </p>
              <p className="tecnologias">
                React
                <span> -</span> Next.js
                <span> -</span> Tailwind CSS
                <span> -</span> TypeScript
                <span> -</span> GraphQL
              </p>
              <a
                href="https://www.clubmed.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://answear.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-15.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>ANSWEAR</h3>
              <p>ANSWEAR online store</p>
              <p className="tecnologias">
                React
                <span> -</span> React Router
                <span> -</span> Lodash
              </p>
              <a
                href="https://answear.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://www.ayvens.com/uk-ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-16.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>Ayvens</h3>
              <p>Ayvens website</p>
              <p className="tecnologias">
                React
                <span> -</span> Swiper
                <span> -</span> core-js
              </p>
              <a
                href="https://www.ayvens.com/uk-ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://allo.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-13.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>ALLO Marketplace</h3>
              <p>Allo e-commerce platform</p>
              <p className="tecnologias">
                Magento
                <span> -</span> Vue.js
                <span> -</span> Nuxt.js
                <span> -</span> MySQL
                <span> -</span> Node.js
                <span> -</span> PHP
                <span> -</span> core-js
              </p>
              <a
                href="https://allo.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://englishhome.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-12.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>English Home</h3>
              <p>The English Home online store</p>
              <p className="tecnologias">
                Vue.js
                <span> -</span> core-js
                <span> -</span> jQuery
                <span> -</span> Webpack
                <span> -</span> Nginx
              </p>
              <a
                href="https://englishhome.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://modivo.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-11.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>MODIVO</h3>
              <p>MODIVO online fashion store</p>
              <p className="tecnologias">
                Vue.js
                <span> -</span> Nuxt.js
                <span> -</span> Node.js
                <span> -</span> core-js
                <span> -</span> Tailwind CSS
                <span> -</span> Sentry
              </p>
              <a
                href="https://modivo.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://caritas.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-10.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>Caritas</h3>
              <p>Fast food</p>
              <p className="tecnologias">
                WordPress
                <span> -</span> PHP
                <span> -</span> Bootstrap
                <span> -</span> MySQL
                <span> -</span> jQuery
                <span> -</span> Nginx
              </p>
              <a
                href="https://caritas.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://all-sky.com.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-9.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>ALL SKY</h3>
              <p>Bookstore</p>
              <p className="tecnologias">
                WordPress
                <span> -</span> PHP
                <span> -</span> Swiper
                <span> -</span> core-js
              </p>
              <a
                href="https://all-sky.com.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <a
              href="https://novolipki.com.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={proyectImg(`./proyecto-8.jpg`)} alt="proyectos" />
            </a>
            <div className="content">
              <h3>Novopecherski Lypky</h3>
              <p>Novopecherski Lypky real estate agency</p>
              <p className="tecnologias">
                WordPress
                <span> -</span> PHP
                <span> -</span> Swiper
                <span> -</span> jQuery
                <span> -</span> MySQL
              </p>
              <a
                href="https://novolipki.com.ua/"
                className="custom-btn btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Go to</span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
