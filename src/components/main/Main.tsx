import React from "react";
import entryIcon from "../../assets/entry.jpg";
import "../../styles/styles.scss";

export const Main = () => {
    return (
        <main className="main">
            <h1>Услуги и сервисы</h1>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#">Ремонтируемые бренды</a></li>
                    <li className="navigation__item"><a href="#">Ремонтируемые устройства</a></li>
                    <li className="navigation__item"><a href="#">Цены на услуги</a></li>
                    <li className="navigation__item"><a href="#">Адреса сервисных центров</a></li>
                    <li className="navigation__item"><a href="#">Специальные цены</a></li>
                    <li className="navigation__item"><a href="#">Отзывы</a></li>
                </ul>
            </nav>
            <img src={entryIcon} alt="doorWiev" />
            <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell.
                Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера
            </p>
            <button>Читать далее</button>
        </main>
    )
}