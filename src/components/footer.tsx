import * as React from "react"
import logo from "../images/logo-w.svg"


// markup
const Footer = () => {
    return (
        <div className="footer">
            <title>Footer</title>
            <img className="footer__logo" src={logo} alt="photo" />
            <p>Accueil </p >
            <p>Contact et tarif</p >
            <p> Mentions légales</p>
            <p> (c) UpNrj. Tous droits réservés.</p>
        </div>
    )
}

export default Footer
