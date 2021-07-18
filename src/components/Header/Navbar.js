import React from "react";

function Navbar() {
  const filmLinks = [
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
  return (
    <div className="navbar_content">
      <ul>
        <li className="navbar_content_films">
          {filmLinks.map((film) => (
            <div>{film}</div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
