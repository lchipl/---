
import React from "react";
import {render} from "react-dom";
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";

 const App = () => {
     return(
         <div className="wrapper">
           <Header />
           <Main />
         </div>
     )
 }

 render(<App />, document.getElementById("container"))