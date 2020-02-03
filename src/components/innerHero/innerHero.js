import React from "react";
import "./innerHero.css";
import "../../css/normalize.css"
import "../../css/global.css"
import hero from "../../images/inner/hero.png"; 
import gitlogo from "../../images/inner/gitlogo.svg"

export default props => (
    <>
        <section className="hero">
        <figure className="hero__img"> 
            <img src={hero} alt="load butthole"/>
        </figure>
        <div className="hero__txt"> 
            <h3 className="brow">ux design - 2019 - web application</h3>
            <h2 className="lead">Raising Awareness About Cybersecurity by Creating a Targeted Phishing Tool</h2>
            <div className="btn__git--wrapper">
                <button className="btn__git">View Repository</button>
                <span className="btn__git--iconbg"><img className="btn__git--icon" src={gitlogo}/></span>
            </div>
        </div>
        </section>
    </>
);  