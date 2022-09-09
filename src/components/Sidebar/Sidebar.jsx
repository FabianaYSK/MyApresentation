import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { CgGirl } from "react-icons/cg";
// import { AiOutlineFolderOpen, AiOutlineStar } from "react-icons/ai";
import { BsChatSquareText } from "react-icons/bs";

const Sidebar = ({ open, close }) => {
  return (
    <div className={open ? "l-sidebar--open" : "l-sidebar" && close ? "l-sidebar--close": "l-sidebar"}>
      <h1 className="l-logo">FYSK</h1>
      <nav className="c-sidebar">      

        <a className="c-nav__item" href="#home">
          <HiOutlineHome />
          home
        </a>

        <a className="c-nav__item" href="#sobre-mim">
          <CgGirl />
          about me
        </a>

        {/*<a className="c-nav__item" href="#projetos">
          <AiOutlineFolderOpen />
          projects
        </a>

        <a className="c-nav__item" href="#habilidades">
          <AiOutlineStar />
          habilidades
        </a> */}

        <a className="c-nav__item" href="#contatos">
          <BsChatSquareText />
          contact
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
