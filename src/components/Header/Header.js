import React from "react";
import Navbar from "./Navbar";
import Logo from "../../svg/logo";

function Header() {
  return (
    <header>
      <div className="header_content">
        <div className="header_content_left">
          <Logo />
          <input
            className="content_left_search"
            placeholder="film, imdb, yönetmen veya oyuncu arayın.."
            type="text"
          ></input>
        </div>
        <div className="header_content_username">
          <a href="#" className="header_content_login">
            Giriş Yap
          </a>
          <a href="#" className="header_content_register">
            Kayıt Ol
          </a>
        </div>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
