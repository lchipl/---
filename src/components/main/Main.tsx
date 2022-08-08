import React from "react";
import entryIcon from "../../assets/entry.jpg";
import "../../styles/styles.scss";

export const Main = () => {
    return (
        <main className="main">
            <div className="services">
                <h1 className="title services__title">Услуги и сервисы</h1>
                <div className="services__buttons">
                    <button className="services__button">
                        <p className="services__label">Оставить заявку</p>
                        <div className="button icon-settings"></div>
                    </button>
                    <button className="services__button">
                        <p className="services__label">Статус ремонта</p>
                        <div className="button icon-search"></div>
                    </button>
                </div>
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
            <div className="about">
                <div className="about__description">
                <p className="text">
                    Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас
                    вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                </p>
                <br/>
                <p className="text">
                    Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что
                    подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам
                    обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                </p>
                <div className="readmore">
                    <button className="readmore__button">Читать далее</button>
                </div>
            </div>
            <img className="about__img" src={entryIcon} alt="logo" />
            </div>
        </main>
    )
}