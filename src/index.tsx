import  "./styles.scss";
 import React from "react";
 import {render} from "react-dom";
import {Header} from "./components/header/Header";
import {Section} from "./components/section/Section";

 const App = () => {
     return(
         <div className="wrapper">
           <Header />
            <Section />
         </div>
     )
 }

 render(<App />, document.getElementById("container"))