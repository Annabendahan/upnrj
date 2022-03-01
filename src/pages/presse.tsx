import * as React from "react"
import Layout from '../components/layout'
import main from '../images/pr/main.png'
import p2 from '../images/pr/p2.png'
import p3 from '../images/pr/p3.png'
import p4 from '../images/pr/p4.png'





import '../components/style.scss'


// markup
const Contact = () => {
    return (
        <main>
            <title>Contact et tarifs</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <h2> Presse</h2>
                    <div className="page__article">
                        <img className="page__article__img" src={p2} alt="main" />
                        <div className="page__article__text"><h3>Guérir par le toucher, réaligner ses énergies... Faut-il croire aux pouvoirs du reiki ?</h3><p>Pratiqué par des guérisseurs aux "doigts de fée", le reiki permettrait de soulager les douleurs et de faire circuler l'énergie dans le corps par simple apposition des mains. Souvent controversée, cette pratique de médecine japonaise ancestrale se démocratise de plus en plus en Occident.</p>
                            <h5>L’Express, 2019</h5></div>
                    </div>




                </div>

            </Layout>
        </main>
    )
}

export default Contact