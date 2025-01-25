import React from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h2>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h2>
        <h3>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Roman Senyk and I am a Senior Front-End Developer."
          />
        </h3>
        <h4>
          <FormattedMessage
            id="my-description"
            defaultMessage="I’m a passionate and experienced Front-End Developer with 5+ years of expertise in building modern, user-friendly, and high-performing web applications. I specialize in React, Next.js, and Vue.js, and have a proven track record of delivering scalable, responsive, and maintainable code for both startups and established businesses."
          />
        </h4>
        <ul>
          <li>
            <p>
              <span>
                <FormattedMessage id="years" defaultMessage="Age:" />
              </span>
              30
            </p>
          </li>
          <li>
            <p>
              <span>Hobbies: </span>
              Chess, Football and Programming
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> romansenyk2@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From:" />
              </span>
              Ivano-Frankivsk, Ukraine
            </p>
          </li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download Resume" />
          </a>
          <div className="mas-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>skills</h3>
        <h4>Front-End</h4>
        <div className="skill">
          <div>
            <img
              alt="HTML"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
            <h5>HTML5</h5>
          </div>
          <div>
            <img
              alt="CSS"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
            <h5>CSS3</h5>
          </div>
          <div>
            <img
              alt="Js"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img
              alt="Typescript"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <h5>TypeScript</h5>
          </div>
          <div>
            <img
              alt="React"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <h5>React</h5>
          </div>
          <div>
            <img
              alt="Next"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            />
            <h5>Next.js</h5>
          </div>
          <div>
            <img
              alt="Vue"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            />
            <h5>Vue.js</h5>
          </div>
          <div>
            <img
              alt="Nuxt"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
            />
            <h5>Nuxt.js</h5>
          </div>
          <div>
            <img
              alt="Redux"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />
            <h5>Redux</h5>
          </div>
          <div>
            <img
              alt="React Router"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/reactrouter/reactrouter-original.svg"
            />
            <h5>React Router</h5>
          </div>
          <div>
            <img
              alt="Bootstrap"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <img
              alt="Material UI"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
            />
            <h5>Material UI</h5>
          </div>
          <div>
            <img
              alt="Tailwind CSS"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
            />
            <h5>Tailwind CSS</h5>
          </div>
        </div>
        <h4>Back-End</h4>
        <div className="skill">
          <div>
            <img
              alt="Nodejs"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <h5>NodeJs</h5>
          </div>
          <div>
            <img
              alt="express"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <h5>Express</h5>
          </div>
          <div>
            <img
              alt="WordPress"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg"
            />
            <h5>WordPress</h5>
          </div>
          <div>
            <img
              alt="Woocommerce"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/woocommerce/woocommerce-original.svg"
            />
            <h5>Woocommerce</h5>
          </div>
          <div>
            <img
              alt="php"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            />
            <h5>PHP</h5>
          </div>
          <div>
            <img
              alt="mysql"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            />
            <h5>MySQL</h5>
          </div>
          <div>
            <img
              alt="mongodb"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            />
            <h5>MongoDB</h5>
          </div>
        </div>
        <h4>
          <FormattedMessage id="tools" defaultMessage="Tools" />
        </h4>
        <div className="skill">
          <div>
            <img
              alt="photoshop"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
              title="Photoshop"
            />
            <h5>Photoshop</h5>
          </div>
          <div>
            <img
              alt="Visual Studio Code"
              className="icons-skils"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
              title="Visual Studio Code"
            />
            <h5>VS Code</h5>
          </div>
          <div>
            <img
              alt="git"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              title="git"
            />
            <h5>Git</h5>
          </div>
          <div>
            <img
              alt="jira"
              className="icons-skils"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg"
              title="jira"
            />
            <h5>Jira</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
