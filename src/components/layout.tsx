import * as React from "react"
import { Link } from 'gatsby';
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'



// markup
const Layout = ({ children }) => {
    return (
        <main >

            <Header />

            {children}
            <Footer />

        </main>
    )
}

export default Layout
