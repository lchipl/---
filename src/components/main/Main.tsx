import React from "react";
import entryIcon from "../../assets/entry.jpg";
import "../../styles/styles.scss";

export const Main = () => {
    return (
        <main className="main">
            <h1 className="title">Услуги и сервисы</h1>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item"><a className="navigation__link" href="#">Ремонтируемые бренды</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Ремонтируемые устройства</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Цены на услуги</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Адреса сервисных центров</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Специальные цены</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Отзывы</a></li>
                </ul>
            </nav>
            <p className="text">Мы являемся авторизованным сервисным центром по ремонту техники Dell.
                Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера
            </p>
            <div className="readmore">
                <button className="readmore__link">Читать далее</button>
            </div>
            <img src={entryIcon} alt="doorWiev" />
        </main>
    )
}