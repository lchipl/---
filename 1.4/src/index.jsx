import React from "react";
import {render} from "react-dom";
import "./styles/styles.scss";
import logo from "./assets/logo.png";

const App = () => {
    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                        <button className="button icon-close"></button>
                        <a href="#"><img src={logo} alt="logo" className="logo"/></a>
                        <button className="button icon-search-sidebar"></button>
            </header>
            <nav>
                <ul className="menu">
                    <li><a href="#" className="menu__link menu__link--active">Ремонт техники</a></li>
                    <li><a href="#" className="menu__link">Услуги и сервисы</a></li>
                    <li><a href="#" className="menu__link">Корпоративным клиентам</a></li>
                    <li><a href="#" className="menu__link">Продавцам техники</a></li>
                    <li><a href="#" className="menu__link">Партнерам</a></li>
                    <li><a href="#" className="menu__link">Производителям</a></li>
                    <li><a href="#" className="menu__link">Наши сервисные центры</a></li>
                    <li><a href="#" className="menu__link">Контанты</a></li>
                </ul>
            </nav>
            <footer className="sidebar__footer">
                <div className="contacts">
                    <div className="contacts__buttons-row">
                        <button className="button icon-phone"></button>
                        <button className="button icon-message"></button>
                        <button className="button icon-profile"></button>
                    </div>
                        <a className="contacts__mail-link" href="mailto:mail@cps.com">mail@cps.com </a>
                        <a className="contacts__phone-link" href="tel:88008908900">8 800 890 8900</a>
                    </div>
                    <div className="languages">
                        <button className="languages__button languages__button-active">RU</button>
                        <button className="languages__button">EN</button>
                        <button className="languages__button">CH</button>
                    </div>
            </footer>
        </aside>
    )
}

render(<App />, document.getElementById("container"));
