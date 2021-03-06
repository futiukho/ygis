import React from "react";
import "./aboutHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';

export default props => (
    <>
        <Fade duration={500}>
            <section className="about">
                <figure className="about__img"> 
                    <img src={props.img} alt="Yana Gevorgyan looking down onto a piece of paper." className="about__img--limiter"/>
                </figure>
            </section>
        </Fade>
    </>
);