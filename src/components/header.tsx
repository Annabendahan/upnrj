import * as React from "react"
import logo from "../images/logo-upnrj.svg"
import { Link } from 'gatsby';
import Menu from './menu'




// markup
const Header = () => {
    let device = ''
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        device = 'phone'
    }
    else {
        device = 'desk'
    }



    return (
        <main className="header">
            <title>Header</title>
            {device === 'phone' ? <Menu /> : ''}

            <Link to="/"> <img className="header__logo" src={logo} alt="photo" /></Link>
            {device === 'desk' ?
                <div className="header__tabs">
                    <div>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/">ACCUEIL</Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/magnetisme">MAGNÉTISME</Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/reiki">SOINS ÉNÉRGETIQUES (REIKI) </Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/acupressure">ACUPRESSURE</Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/fasciatherapie">FASCIATHÉRAPIE</Link>
                    </div>
                    <div>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/memoire-cellulaire">MÉMOIRE CÉLLULAIRE</Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/pathologies">PATHOLOGIES </Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/contact-tarif">CONTACT ET TARIF </Link>
                        <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/presse">PRESSE</Link>
                    </div>
                </div>
                : ''}



        </main>
    )
}

export default Header
