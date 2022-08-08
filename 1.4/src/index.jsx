import React from "react";
import {render} from "react-dom";

const App = () => {
    return (
        <aside>
            <header>
                 закрыть
                главный лейбл
                поиск
            </header>
            <div>
                <ul>
                    <li>Ремонт техники</li>
                    <li>Услуги и сервисы</li>
                    <li>Корпоративным клиентам</li>
                    <li>Продавцам техники</li>
                    <li>Партнерам</li>
                    <li>Производителям</li>
                    <li>Наши сервисные центры</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <footer>
                <div>
                    3 иконки
                </div>
                <a href="mailto:mail@cps.com">mail@cps.com </a>
                <a href="tel:88008908900">8 800 890 8900</a>
                <div>
                    langs
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                </div>
            </footer>
        </aside>
    )
}

render(<App />, document.getElementById("container"));