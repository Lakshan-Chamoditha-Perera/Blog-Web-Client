import React from "react";
import "./footer.css";

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__container">
            <h1 className="footer__title">
                BLOGGER
            </h1>
            <div className="footer__link">
                created with ReactJS and Vite
            </div>
        </div>

        <span className="footer__copy">
            Developed by <strong>Shan Perera</strong>   &#169; &nbsp;
            {new Date().getFullYear()}
        </span>
    </footer>);
};

export default Footer;
