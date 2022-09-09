import React from "react";
import { FaJava } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

const About = () => {
  return (
    <div className="l-page" id="sobre-mim">
      <div>
        <article>
          <h1 className="title">About me</h1>
          <p className="description">Hello! My name is Fabiana. </p>
          <p className="description">
            I'm interested in use different technologies to understand and solve
            people's problems.{" "}
          </p>
          <p className="description">
            Currently, I'm focused on studying the following skills:
          </p>
        </article>
      </div>

      <div>
        <nav className="c-nav u-my-3">
          <a className="c-nav__item">
            <DiGit />
          </a>

          <a className="c-nav__item">
            <SiHtml5 />
          </a>

          <a className="c-nav__item">
            <SiCss3 />
          </a>

          <a className="c-nav__item">
            <SiJavascript />
          </a>

          <a className="c-nav__item">
            <SiReact />
          </a>

          <a className="c-nav__item">
            <FaJava />
          </a>

          <a className="c-nav__item">
            <TbBrandKotlin />
          </a>

          <a className="c-nav__item">
            <SiMysql />
          </a>
        </nav>
      </div>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default About;
