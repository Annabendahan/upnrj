import * as React from "react"
import logo from "../images/logo-w.svg"
import { Link } from 'gatsby';



// markup
const Footer = () => {
    return (
        <div className="footer">
            <title>Footer</title>
            <div className="footer__content">
                <img className="footer__logo" src={logo} alt="photo" />
                <Link to="/"><p>Accueil </p ></Link>
                <Link to="/contact-tarif"><p>Contact et tarif</p ></Link>
                <p> Mentions légales</p>
            </div>
            <div className="footer__line"></div>
            <div className="footer__note">
                <p> (c) UpNrj. Tous droits réservés.</p>

            </div>

        </div>
    )
}

export default Footer
