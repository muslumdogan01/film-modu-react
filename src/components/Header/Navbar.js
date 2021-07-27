// import React, { useState } from "react";
import React, { useState } from "react";

function Navbar() {
  //   const [isOpen, setOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const onClickFunction = () => {
    setOpen(!isOpen);
  };

  //   const onClickFunction = () => {
  //     setOpen(!isOpen);
  //   };
  let filmLinks = [
    "Arşiv",
    "Film Türleri",
    "En Çok İzlnen Filmler",
    "Seri Filmler",
    "Oyuncular",
    "Yönetmenler",
    "Altyazılı Filmler",
    "Türkçe Dublaj Filmler",
    "Yabancı Dizi İzle",
  ];
  let movieGenres = [
    "4K",
    "Aile",
    "Aksiyon",
    "Animasyon",
    "Belgesel",
    "Bilim-Kurgu",
    "Altyazılı Filmler",
    "Dram",
    "Yabancı",
    "Fantastik",
    "Gerilim",
    "Gizem",
    "Komedi",
    "Korku",
    "Suç",
    "Savaş",
    "Macera",
  ];

  return (
    <div className="navbar_content">
      <ul>
        <li className="navbar_content_films">
          {filmLinks.map((film, index) => (
            <a
              href="#"
              //   onClick={index == 1 && onClickFunction}
              onClick={index == 1 && onClickFunction}
              className="navbar_content_films_film"
            >
              {film}
            </a>
          ))}
        </li>
      </ul>
      <div className="navbar_content_hideMenu">
        <ul className="navbar_content_film_türleri">
          <li className="navbar_content_film_tür">
            {isOpen &&
              movieGenres.map((movies) => (
                <a href="#" className="navbar_content_film_links">
                  {movies}
                </a>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
