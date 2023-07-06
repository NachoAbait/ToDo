import React from "react";
import css from "./footer.module.css";

export default function Footer() {
  return (
    <div className={css.container}>
       <div className={css.containerLogo}>
                <div className={css.icono}>
                    
                </div>
                <h2 className={css.logo}> 
                Task<span className={css.span}>Tracker</span>
                </h2>
            </div>
            <div className={css.grid}>
                <div className={css.col}>
                    WebSide hecha con ❤️ por <a target="blank" href="https://www.linkedin.com/in/nacho-abait-480073256/"> Nacho Abait</a>
                </div>
    
            </div>
    </div>
  )
}
