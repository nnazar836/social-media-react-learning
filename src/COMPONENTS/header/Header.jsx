import React from "react";
import { Link } from "react-router-dom";
import css from "./header.module.css"

function Header(props){
    return(
      <header className={css.header}>
        <div className={css.header__logoContainer}>

          <Link className={css.header__link} to="/" >
            BBZ-media
          </Link>

        </div>
      </header>
    )
}

export default Header;