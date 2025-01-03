import * as React from "react"
import logo from "../images/logoc.png"
import { Link } from 'gatsby';
import Menu from './menu'




// markup
const Header = () => {
    let device = ''


    return (
        <main className="header">
            <title>Header</title>
            <Menu />

            <Link to="/"> <img className="header__logo" src={logo} alt="photo" /></Link>

            <div className="header__tabs">
                <div>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/">ACCUEIL</Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/magnetisme">MAGNÉTISME</Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/reiki">SOINS ÉNÉRGETIQUES (REIKI) </Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/hypnose">HYPNOSE </Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/acupression">ACUPRESSION</Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/fasciatherapie">FASCIATHÉRAPIE</Link>

                </div>
                <div>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/memoire-cellulaire">MÉMOIRE CÉLLULAIRE</Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/pathologies">PATHOLOGIES </Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/pnltno">PNL ET TNO  </Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/contact-tarif">CONTACT ET TARIF </Link>
                    <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/presse">PRESSE</Link>
                </div>
            </div>




        </main>
    )
}

export default Header
