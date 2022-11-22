import * as React from "react"
import logo from "../images/logo-w.svg"
import { Link } from 'gatsby';
import menuitem from '../images/menu.svg'
import cross from '../images/cross.svg'



// markup
const Menu = () => {
    const [menu, openMenu] = React.useState(null);
    const open = Boolean(menu);

    const handleClick = (event) => {
        openMenu(event.currentTarget);
    };
    const handleClose = () => {
        openMenu(null);
    };
    return (
        <div className="menu">
            {open ? <div className="menu__item" onClick={handleClose}><img src={cross} alt="menucross" /></div> : <div className="menu__item" onClick={handleClick}><img src={menuitem} alt="menuitem" /></div>}
            {open ? <div onClick={handleClose} className='menu__backdrop'></div> : ''}

            {open ? <div className="menu__dropdown" >
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/"><p>ACCUEIL</p></Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/magnetisme"><p>MAGNÉTISME</p></Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/reiki"><p>SOINS ÉNÉRGETIQUES (REIKI)</p> </Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/hypnose"><p>HYPNOSE</p> </Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/acupression"><p>ACUPRESSION</p></Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/fasciatherapie"><p>FASCIATHÉRAPIE</p></Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/memoire-cellulaire"><p>MÉMOIRE CÉLLULAIRE</p></Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/pathologies"><p>PATHOLOGIES </p></Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/contact-tarif"><p>CONTACT ET TARIF</p> </Link>
                <Link activeStyle={{ color: '#ec8074', fontWeight: 'bold' }} to="/presse"><p>PRESSE</p></Link></div> : ''}


        </div>
    )
}

export default Menu
