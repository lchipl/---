import React from "react";
import {render} from "react-dom";

const App = () => {
    return (
        <aside>
            <header className="sidebar__header">
                        <button className="button icon-close"></button>
                        <a href="#"><img src="../../assets/logo.svg" alt="logo" className="logo"/></a>
                        <div className="button icon-search-sidebar"></div>
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
            <footer>
                <div className="contacts">
                <a href="mailto:mail@cps.com">mail@cps.com </a>
                <br/>
                    <div className="contacts__buttons-row">
                    <a href="tel:88008908900">8 800 890 8900</a>
                    <button className="button icon-profile"></button>
                    </div>
                </div>
                <div>
                    <div className="languages">
                        <button className="languages__button languages__button--active">RU</button>
                        <button className="languages__button">EN</button>
                        <button className="languages__button">CH</button>
                    </div>
                </div>
            </footer>
        </aside>
    )
}

render(<App />, document.getElementById("container"));