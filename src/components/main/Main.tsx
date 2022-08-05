import React from "react";
import entryIcon from "../../assets/entry.svg";
import "../../styles/styles.scss";

export const Main = () => {
    return (
        <main className="main">
            <h1 className="title">Услуги и сервисы</h1>
            <div className="services">
                <button className="services__button">
                    <p className="services__label">Оставить заявку</p>
                    <div className="button icon-settings"></div>
                </button>
                <button className="services__button">
                    <p className="services__label">Статус ремонта</p>
                    <div className="button icon-search"></div>
                </button>
            </div>
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
            <div>
                <p className="text">Мы являемся авторизованным сервисным центром по ремонту техники Dell.
                    Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                    Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера
                </p>
            </div>
            <div className="readmore">
                <button className="readmore__button">Читать далее</button>
            </div>
            <img className="about__img" src={entryIcon} alt="logo" />
        </main>
    )
}