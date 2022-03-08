import * as React from "react"
import Layout from '../components/layout'
import main from '../images/fascia/main.png'
import mainMob from '../images/fascia/main-mob.png'
import p2 from '../images/fascia/p2.png'
import p3 from '../images/fascia/p3.png'



import '../components/style.scss'


// markup
const Fasciatherapie = () => {
    return (
        <main>
            <title>Fasciatherapie</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> La fasciathérapie</h2>
                            <p>
                                <span className="bold">Les fascias</span>, ces membranes souples reliées aux muscles, aux os, aux vaisseaux, aux ligaments, aux nerfs et aux viscères, réagissent et s’ajustent continuellement en fonction de nos activités physiques et psychiques.
                                <br /> <br />

                                Sous l’effet du stress ou de l’anxiété par exemple, ils se raidissent ou se crispent en fonction de l’importance des stimuli. A force de sollicitations importantes et répétées, les fascias n’arrivent plus à retrouver leur souplesse et leur mobilité naturelles. Cet <span className="bold">état de forte tension </span>s’installe dans la durée et s’accompagne de fatigue, d’une perte de la sensation de fluidité des mouvements, de dysfonctionnements articulaires, digestifs, circulatoires, etc.

                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>
                    <div className="page__box page__box__rev">
                        <div className="page__box__img">
                            <img src={p3} alt="main" />
                            <br /><br />
                            <p>L’action douce et respectueuse de la fasciathérapie apporte la plupart du temps une sensation de repos et de bien-être.<br />
                                <span className="bold">La Fasciathérapie est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.</span></p>
                        </div>
                        <div className="page__box__text">
                            <p> En stimulant manuellement les fascias, <span className="bold">la fasciathérapie se donne pour but de rétablir leur équilibre et leur élasticité</span>. Les tissus retrouvent leur mobilité, la personne recouvre ses fonctions et son état de bien-être dans une certaine fluidité.
                                <br /> <br />
                                La fasciathérapie est notamment indiquée pour :
                                <br /> <br />

                                ● Les personnes anxieuses, en situation de <span className="bold">stress</span>, de <span className="bold">fatigue</span>, de <span className="bold">burn-out</span>.
                                <br />
                                ● Les <span className="bold">douleurs chroniques</span> telles que l’arthrose, les douleurs dorsales, les rhumatismes.
                                <br />
                                ● Les <span className="bold">douleurs aiguës</span>, telles que les lumbagos, les sciatiques, les cruralgies, les torticolis, les tendinites.
                                <br />● La <span className="bold">traumatologie </span>: entorses, pathologies musculaires, après une intervention chirurgicale, en médecine du sport.
                                <br />● Les pathologies de la <span className="bold">sphère crânienne</span> : céphalées, migraines, acouphènes.
                                <br />● Les pathologies de la <span className="bold">sphère abdominale et uro-gynécologiques</span> : troubles du transit, syndrome du côlon irritable, règles douloureuses.


                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main >
    )
}

export default Fasciatherapie
