import React from "react";
// import TextLoop from "react-text-loop";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiAcademia } from "react-icons/si";
import { useState, useEffect } from "react";

const array = [
  "Olá mundo!",
  "Hello world!",
  "Ciao mondo!",
  "Hola mundo!",
  "Aloha honua!",
  "Bonjour le monde! ",
  "こんにちは世界!"
];

function Header() {
  const [greetings, setGreetings] = useState(0);

  useEffect(
    () => {
    const delay = array[greetings].length * 200;
    const interval = setInterval(
      () => {
      setGreetings((e) => {
        return e + 1 < array.length ? e + 1 : 0;
      });
    }, delay);

    return () => clearInterval(interval);
  });

  return (
    <div className="l-page bg__profile">
      <main>
        <h1 className="greetings" key={array[greetings]}>{array[greetings]} </h1>
        <p className="description">My name is</p>
        <h1 className="name">Fabiana Yumi Sato Kayanoki</h1>
        <p className="description">I'm a learner, researcher and developer.</p>

        <nav className="c-nav u-my-3">
          <a className="c-nav__item" href="https://github.com/FabianaYSK">
            <FaGithub />
          </a>

          <a
            className="c-nav__item"
            href="http://lattes.cnpq.br/5577212075446160"
          >
            <SiAcademia />
          </a>

          <a
            className="c-nav__item"
            href="https://www.linkedin.com/in/fabiana-ysk"
          >
            <BsLinkedin />
          </a>

          {/* <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a> */}
        </nav>
      </main>
    </div>
  );
}

export default Header;
