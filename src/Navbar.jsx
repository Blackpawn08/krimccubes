import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Pricing from "./pages/Pricing";
import "./navs.css";
import { GalleryData } from "./Components/GalleryData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          <img className="logo" src="../public/rubiks/logoabout.png"/>
          KRIMC
        </Link>

        <div>
          <form className="search-bar">
            <input className="input"
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search"
            />
           <FontAwesomeIcon className="icon" icon={faSearch} />
          </form>
        </div>
        <ul>
          <CustomLink to="/pricing">Puzzle Category</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
      {searchTerm !== "" && (
        <div className="box">
          <div className="galleryContainer">
            {GalleryData.filter((item) =>
              item.des.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((item, key) => (
              <div className="pics-holder" key={item.id}>
                <img src={item.image} alt={item.des} />
                <h1 className="headf">{item.des}</h1>
                <p className="price">{item.price}</p>
                <p className="info">{item.info}</p>
                <button className="but">Buy Now!</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
