import React from "react";
import "./contact.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <section className="contact">
            <h4 className="contact__head">Feel free to say hi!
            </h4>
            <div className="btn__contact--wrapper">
                <a href="mailto:ygevorgyan@mica.edu"><button className="btn__contact">ygevorgyan@mica.edu</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ygevorgyan"><button className="btn__contact">LinkedIn</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ygev"><button className="btn__contact">GitHub</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ygev"><button className="btn__contact">Medium</button></a>
            </div>
            <p className="contact__txt">I'll show you cooler, NDA-compliant projects privately, if we're a match.</p>
        </section>
    </>
);  