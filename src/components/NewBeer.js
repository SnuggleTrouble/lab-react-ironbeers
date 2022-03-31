import React from "react";
import { Link } from "react-router-dom";
import homebutton from "./../assets/home-icon.png"

export function NewBeer() {
  return (
    <div>
      <header className="homebutton">
        <Link to={"/"}>
            <img className="homebutton-icon" src={homebutton} alt="return to homepage"/>
        </Link>
      </header>
      <p>New Beer</p>
    </div>
  );
}
