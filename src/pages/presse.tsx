import * as React from "react"
import Layout from '../components/layout'
import main from '../images/pr/main.png'
import mainMob from '../images/pr/main-mob.png'
import p2 from '../images/pr/p2.png'
import p3 from '../images/pr/p3.png'
import p4 from '../images/pr/p4.png'





import '../components/style.scss'


// markup
const Contact = () => {
    return (
        <main>
            <title>Presse</title>
            <Layout >
                <div className="page">

                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__content">
                        <h2> Presse</h2>
                        <a target="_blank" href="https://www.lexpress.fr/styles/psycho/les-vrais-bienfaits-et-les-pouvoirs-du-reiki_2105485.html">
                            <div className="page__article">

                                <img className="page__article__img" src={p2} alt="main" />
                                <div className="page__article__text"><h3>Guérir par le toucher, réaligner ses énergies... Faut-il croire aux pouvoirs du reiki ?</h3><p>Pratiqué par des guérisseurs aux "doigts de fée", le reiki permettrait de soulager les douleurs et de faire circuler l'énergie dans le corps par simple apposition des mains. Souvent controversée, cette pratique de médecine japonaise ancestrale se démocratise de plus en plus en Occident.</p>
                                    <h5>L’Express, 2019</h5></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.gala.fr/beaute/tendances_beaute/les-5-medecines-dites-paralleles-a-suivre-de-pres_458627">
                            <div className="page__article">
                                <img className="page__article__img" src={p3} alt="main" />
                                <div className="page__article__text"><h3>Bien-être : reiki, hypnose, magnétisme… 5 médecines parallèles à suivre de près</h3><p>Intuition, don, état de conscience modifié : il y a un petit plus qui se glisse dans ces pratiques pour nous aider à guérir, nous apaiser, nous retrouver. Que ce soit le reiki, l'hypnose, le magnétisme, le chamanisme ou la mémoire cellulaire, ces médecines dites parallèles trouvent un écho particulier surtout en ces temps troublés. Suivez le guide...</p>
                                    <h5>Gala, 2020</h5></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://madame.lefigaro.fr/bien-etre/bioresonnance-medecine-quantique-vibrations-ces-therapies-qui-promettent-lharmonie-des-energies-100721-197269">
                            <div className="page__article">
                                <img className="page__article__img" src={p4} alt="main" />
                                <div className="page__article__text"><h3>Ces thérapies qui promettent l’harmonie des énergies</h3><p>Champ vibratoire, biorésonnance et médecine quantique... Ces techniques alternatives qui nous promettent un bien-être augmenté font le buzz sur les réseaux sociaux. Petit manuel d’initiation au new "New Age".</p>
                                    <h5>Madame Figaro, 2021</h5></div>
                            </div>
                        </a>
                    </div>




                </div>

            </Layout>
        </main >
    )
}

export default Contact