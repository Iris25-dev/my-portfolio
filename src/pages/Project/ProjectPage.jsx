import React, { useState } from "react";
import "./ProjectPage.css";

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from "react-router-dom";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
const proyectsImg = require.context("../../img", true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  // const [estadoModal6, cambiarEstadoModal6] = useState(false);
  // const [estadoModal5, cambiarEstadoModal5] = useState(false);
  // const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id="site-web" defaultMessage="websites" />
            </NavLink>
            {/* <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink>
            <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage
                id='games'
                defaultMessage='games'
              />
            </NavLink> */}
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img
                src={proyectsImg(`./proyecto-17.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img
                src={proyectsImg(`./proyecto-14.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img
                src={proyectsImg(`./proyecto-15.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img
                src={proyectsImg(`./proyecto-16.jpg`)}
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img
                src={proyectsImg(`./proyecto-13.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img
                src={proyectsImg(`./proyecto-12.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img
                src={proyectsImg(`./proyecto-11.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img
                src={proyectsImg(`./proyecto-10.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img
                src={proyectsImg(`./proyecto-9.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img
                src={proyectsImg(`./proyecto-8.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img
                src={proyectsImg(`./proyecto-7.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          {/* <div className="projects__item">
            <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <img
                src={proyectsImg(`./proyecto-6.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img
                src={proyectsImg(`./proyecto-5.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img
                src={proyectsImg(`./proyecto-3.jpg`)}
                alt=""
                className="projects__img"
              />
            </a>
          </div> */}
        </section>
      </main>

      <Modal estado={estadoModal17} cambiarEstado={cambiarEstadoModal17}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-17-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-17-p1"
                  defaultMessage="Summary: The website RKC.ua offers a range of building materials for residential and industrial construction, including insulation, roofing, and facade systems."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-17-p2"
                  defaultMessage="Responsibility: As a Frontend Developer specializing in JAMstack technologies, I utilized frameworks like React and Gatsby to create high-performance, scalable web applications. I also integrated backend services using Firebase for real-time data and authentication, while ensuring cross-browser compatibility through core-js polyfills."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://rkc.ua/" target="_blank">
                  https://rkc.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gatsby/gatsby-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal14} cambiarEstado={cambiarEstadoModal14}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-14-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-14-p1"
                  defaultMessage="Summary: Club Med is a global provider of all-inclusive resorts, offering vacation packages that include accommodation, meals, entertainment, and various recreational activities. They cater to families, couples, and individuals seeking luxury, relaxation, and adventure."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-14-p2"
                  defaultMessage="Responsibility: In my role as Senior Frontend Developer, I was responsible for building and optimizing high-performance web applications, employing Next.js for server-side rendering and Apollo Client for smooth state management. I incorporated GraphQL to facilitate scalable data retrieval and utilized Tailwind CSS to develop adaptable and efficient styles. I also relied on TypeScript for strong type checking and code maintainability."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://www.clubmed.ua/" target="_blank">
                  https://www.clubmed.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal15} cambiarEstado={cambiarEstadoModal15}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-15-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-15-p1"
                  defaultMessage="Summary: ANSWEAR.ua is an online store offering a wide selection of women's, men's, and children's clothing, footwear, and accessories. The platform features original global brands, including premium, sports, and lifestyle labels."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-15-p2"
                  defaultMessage="Responsibility: As a Frontend Developer, I focused on developing and optimizing web applications, leveraging React to create dynamic user interfaces and React Router for seamless client-side navigation. I utilized Akamai to ensure high-performance content delivery and reliable caching. Additionally, I incorporated Lodash to streamline data manipulation and implement functional programming techniques effectively."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://answear.ua/" target="_blank">
                  https://answear.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/reactrouter/reactrouter-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/lodash/lodash-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal16} cambiarEstado={cambiarEstadoModal16}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-16-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-16-p1"
                  defaultMessage="Summary: Ayvens is a global leader in sustainable mobility solutions, offering a range of services like fleet management, consultancy, and leasing for both businesses and individuals."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-16-p2"
                  defaultMessage="Responsibility: As a Full Stack Developer, I developed dynamic and responsive web applications by utilizing React for the frontend and ASP.NET for backend services. I improved the user interface with styled-components for efficient styling and ensured smooth interactions and animations using Swiper. Additionally, I employed core-js to ensure compatibility across different browsers, providing a consistent user experience."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://www.ayvens.com/uk-ua/" target="_blank">
                  https://www.ayvens.com
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swiper/swiper-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal13} cambiarEstado={cambiarEstadoModal13}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-13-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-13-p1"
                  defaultMessage="Summary: Allo.ua is a Ukrainian e-commerce platform offering a broad range of electronics, gadgets, home appliances, and lifestyle products. It features popular categories such as smartphones, computers, household equipment, and personal care items."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-13-p2"
                  defaultMessage="Responsibility: As a Full Stack Developer, I developed and maintained e-commerce platforms with Magento, Vue.js, and Nuxt.js. I managed MySQL databases, implemented server-side logic with Node.js, and customized the backend with PHP. I also integrated jQuery for DOM manipulation and ensured cross-browser compatibility with core-js, enhancing the overall shopping experience."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://allo.ua/" target="_blank">
                  https://allo.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/magento/magento-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal12} cambiarEstado={cambiarEstadoModal12}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-12-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-12-p1"
                  defaultMessage="Summary: EnglishHome.ua offers a variety of home textiles, including bedding, towels, blankets, and accessories. The platform provides a wide selection of high-quality products designed to enhance comfort and style in living spaces."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-12-p2"
                  defaultMessage="Responsibility: As a Frontend Web Developer, I designed and implemented responsive web applications, using Vue.js to craft dynamic user interfaces. I optimized application performance by managing assets and build processes with Webpack, ensuring faster loading times. In addition to leveraging jQuery for legacy support and DOM manipulation, I utilized core-js to maintain cross-browser compatibility. I also managed Nginx configurations to ensure efficient frontend delivery, contributing to a smooth and optimized user experience."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://englishhome.ua/" target="_blank">
                  https://englishhome.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal11} cambiarEstado={cambiarEstadoModal11}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-11-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-11-p1"
                  defaultMessage="Summary: MODIVO.ua is an online fashion store offering a wide variety of clothing, footwear, and accessories for men, women, and children. The platform features premium and popular global brands and offers seasonal collections, sales, and promotions."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-11-p2"
                  defaultMessage="Responsibility: In my capacity as a Full Stack JavaScript Developer, I was entrusted with the design and maintenance of web applications, employing Vue.js and Nuxt.js to create efficient and dynamic frontends, alongside Node.js for backend processing. My work involved utilizing Tailwind CSS for streamlined, responsive styling and integrating core-js to guarantee seamless functionality across a variety of browsers, thereby enhancing the user experience."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://modivo.ua/" target="_blank">
                  https://modivo.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sentry/sentry-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal10} cambiarEstado={cambiarEstadoModal10}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-10-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-10-p1"
                  defaultMessage="Summary: Caritas Ukraine is a humanitarian organization that focuses on providing support to vulnerable populations, including displaced persons, children, and people with disabilities. They offer a range of services such as humanitarian aid, healthcare programs, migration support, and advocacy for social reform."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-10-p2"
                  defaultMessage="Responsibility: As a WordPress Developer, I was responsible for building and managing WordPress websites, utilizing PHP for backend functionality and MySQL for database management. I created responsive, user-friendly designs with Bootstrap and integrated interactive features using jQuery. Furthermore, I configured and optimized Nginx to efficiently serve WordPress applications, ensuring optimal performance."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://caritas.ua/" target="_blank">
                  https://caritas.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal9} cambiarEstado={cambiarEstadoModal9}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-9-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-9-p1"
                  defaultMessage="Summary: ALL SKY is a Ukrainian advertising company specializing in outdoor advertising solutions, large-format printing, facade cladding, and LED screen technology. They offer full-cycle services, from design to installation, with a focus on high-quality materials and innovative techniques."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-9-p2"
                  defaultMessage="Responsibility: In my role as a WordPress Front-End Developer, I was responsible for crafting visually appealing and user-friendly web experiences using the WordPress platform. I employed PHP for server-side scripting and integrated interactive elements with Swiper and core-js to enhance functionality. To improve SEO and website performance, I optimized the site using Yoast SEO. Additionally, I designed and implemented custom layouts with Elementor, ensuring that the user experience remained seamless across desktop and mobile devices."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://all-sky.com.ua/" target="_blank">
                  https://all-sky.com.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swiper/swiper-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal8} cambiarEstado={cambiarEstadoModal8}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-8-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-8-p1"
                  defaultMessage="Summary: Novopecherski Lypky is a real estate agency specializing in the sale and rental of properties in Kyiv, particularly within the prestigious Novopecherski Lypky area. The company offers a variety of real estate, including apartments, commercial spaces, and houses."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-8-p2"
                  defaultMessage="Responsibility: As a Full-Stack WordPress Developer, I was responsible for developing, maintaining, and optimizing websites built on the WordPress platform. I utilized my expertise in PHP for backend development, MySQL for database management, and jQuery for dynamic front-end functionalities. I implemented responsive designs using Swiper sliders and configured Nginx for optimal website performance."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://novolipki.com.ua/" target="_blank">
                  https://novolipki.com.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swiper/swiper-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal estado={estadoModal7} cambiarEstado={cambiarEstadoModal7}>
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview">
              <img src={proyectsImg(`./proyecto-7-com.png`)} alt="" />
            </div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id="projects-info-7-p1"
                  defaultMessage="Summary: BarberPet is a grooming salon in Kyiv specializing in pet beauty and health services. They offer professional grooming for dogs and cats, including haircuts, hygienic care, trimming, spa treatments, and more."
                />
              </p>
              <p>
                <FormattedMessage
                  id="projects-info-7-p2"
                  defaultMessage="Responsibility: As a Senior WordPress Front-End Developer, I created responsive and user-friendly web experiences, utilizing PHP for server-side development, core-js for cross-browser JavaScript functionality, and Slick/Bootstrap for responsive design. I also managed and optimized WordPress sites, using jQuery for dynamic effects and MySQL for database management."
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span>{" "}
                <a href="https://barberpet.com.ua/" target="_blank">
                  https://barberpet.com.ua
                </a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id="projects-tec"
                    defaultMessage="Used technology:"
                  />
                </span>
                <div className="eins-modal-tec">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/corejs/corejs-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                    alt=""
                  />
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* <Modal
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-6-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-6-p1'
                  defaultMessage='Spider-Man fan page, is a project developed in honor of Spider-Man.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-6-p2'
                  defaultMessage='It offers a wide variety of information about Spider-Man and his multi-verse variants, as well as facts and trivia about his enemies and allies.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Spider-Man" target="_blank">https://spider-man-fans-page.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-5-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-5-p1'
                  defaultMessage='PremierFood, page created for the sale of fast food.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-5-p2'
                  defaultMessage='Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://rkc.ua" target="_blank">https://rkc.ua</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-3.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='ProgramCoffe, a blog designed to inform about the best recipes for your coffee.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='It offers a large amount of information on the perfect preparations for a good coffee, as well as the temperature at which it must be prepared, as well as the best coffee beans.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Blog-Coffe" target="_blank">https://ProgramCoffe.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Project;
