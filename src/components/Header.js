import React from "react"
import { Link } from "react-router-dom"
import homebutton from "./../assets/home-icon.png";

export function Header() {
    return (
        <header className="homebutton">
        <Link to={"/"}>
          <img
            className="homebutton-icon"
            src={homebutton}
            alt="return to homepage"
          />
        </Link>
      </header>
    )
}