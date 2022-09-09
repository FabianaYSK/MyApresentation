import React from "react";
import { useState, useEffect } from "react";
import "./assets/global.sass";

import Sidebar from "./components/Sidebar/Sidebar";
// import { AiOutlineMenu } from "react-icons/ai";
import Header from "./components/Header/Header";
import About from "./components/About me/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    // O usuário poderá usar o teclado para abrir ou fechar a sidebar. No caso, a tecla Space.
    document.body.onkeyup = function (e) {
      if (e.key == " " || e.code == "space" || e.keyCode == 32) {
        setSidebar(!sidebar);
        console.log("Você apertou o space e o sidebar abriu ou fechou!");
      }
    };

    // O usuário poderá usar o mouse para abrir ou fechar a sidebar. No caso, um duplo click em qualquer local do site irá abrir ou fechar a sidebar.
    document.body.ondblclick = function (e) {
      setSidebar(!sidebar);
      console.log("Você clicou duas vezes e o sidebar abriu ou fechou!");
    };

    // Impedir que o pressionamento da tecla Space pelo usuário não role a página.
    window.addEventListener("keydown", (e) => {
      if (e.key == " " || e.code == "space" || (e.keyCode == 32 && e.target === document.body)) {
        e.preventDefault();
      }
    });
    [];
  });

  return (
    <>
      <div className="l-app">
        {/* Apresentar o sidebar sempre que houver o clique no botão menu. 
          Quando houver o clique do usuário, a sidebar deverá ser apresentada*/}

        <button
          className="l-sidebar__btn"
          type="button"
          onClick={() => setSidebar(!sidebar)}
        >
          Menu
        </button>

        <Sidebar open={sidebar} close={sidebar} />

        <div className="l-content">
          <Header />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
