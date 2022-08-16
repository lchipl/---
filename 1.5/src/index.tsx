import React from "react";
import {render} from "react-dom";

import "./styles.scss";

import lenovo from "./assets/brands/lenovo.png";
import samsung from "./assets/brands/samsung.png";
import apple from "./assets/brands/apple.png";
import sonic from "./assets/brands/view-sonic.png";
import bosh from "./assets/brands/bosch.png";
import hp from "./assets/brands/hp.png";
import acer from "./assets/brands/acer.png";
import sony from "./assets/brands/sony.png";

//const [title, setTitle] = React.useState("Показать все");

// const showMore = () => {
//   setTitle("Скрыть")
// }
//чмбсл: массив сделать из компонентов и промапить блоки

 const App = () => {
     return(
         <section className="wrapper">
           <div className="background-for-section-title">
            <h3 className="section-title">Ремонт техники различных брендов</h3>
           </div>
           <section className="container container-mobile-padding-right-none">
           <div className="swiper-wrapper">
             <div className="brands">
             <div className="brands__card-item swiper-slide">
               <img src={lenovo} alt="lenovo"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={samsung} alt="samsung"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={apple} alt="apple"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={sonic} alt="view-sonic"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={bosh} alt=""/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={hp} alt="hp"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={acer} alt="acer"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={sony} alt="sony"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={lenovo} alt="lenovo"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={samsung} alt="samsung"/>
               <div className="check-partner-button"></div>
             </div>
             <div className="brands__card-item swiper-slide">
               <img src={apple} alt="apple"/>
               <div className="check-partner-button"></div>
             </div>
           </div>
             </div>
           </section>
           <div  className="collapse-button content-is-collapsed">
             {/* {title} */} показать все
           </div>
         <div className="swiper-pagination"></div>
         </section>
     )
 }

 render(<App />, document.getElementById("container"));
