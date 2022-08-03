import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import toolIcon from "../../assets/tool.png";
import menuIcon from "../../assets/burgerMenu.png";
import phoneIcon from "../../assets/call.png";
import personIcon from "../../assets/profile.png";
import messageIcon from "../../assets/message.png";

import "../../styles/styles.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                        <nav className="menu">
                                <button className="menu__button">
                                    <img src={menuIcon} alt="logo" />
                                </button>
                        </nav>
                        <div className="logo">
                            <a className="logo__link" href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                    <div className="phone">
                        <button className="phone__button">
                            <img src={toolIcon} />
                        </button>
                    </div>
                    <div className="message">
                        <button className="message__button">
                            <img src={messageIcon} />
                        </button>
                    </div>
                    <div className="person">
                        <button className="person__button">
                            <img src={personIcon} />
                        </button>
                    </div>
                    <div className="search">
                        <button className="search__button">
                            <img src={searchIcon} />
                        </button>
                    </div>
                    <div className="tools">
                        <button className="tools__button">
                            <img src={toolIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}