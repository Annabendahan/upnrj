import * as React from "react"
import Layout from '../components/layout'
import main from '../images/fascia/main.png'
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

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> La fasciathérapie</h2>
                            <p>
                                Les fascias, ces membranes souples reliées aux muscles, aux os, aux vaisseaux, aux ligaments, aux nerfs et aux viscères, réagissent et s’ajustent continuellement en fonction de nos activités physiques et psychiques.
                                <br /> <br />

                                Sous l’effet du stress ou de l’anxiété par exemple, ils se raidissent ou se crispent en fonction de l’importance des stimuli. A force de sollicitations importantes et répétées, les fascias n’arrivent plus à retrouver leur souplesse et leur mobilité naturelles. Cet état de forte tension s’installe dans la durée et s’accompagne de fatigue, d’une perte de la sensation de fluidité des mouvements, de dysfonctionnements articulaires, digestifs, circulatoires, etc.

                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>
                    <div className="page__box">
                        <div className="page__box__img">
                            <img src={p3} alt="main" />
                            <p>L’action douce et respectueuse de la fasciathérapie apporte la plupart du temps une sensation de repos et de bien-être.</p>
                            <p>La Fasciathérapie est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.</p>
                        </div>
                        <div className="page__box__text">
                            <p> En stimulant manuellement les fascias, la fasciathérapie se donne pour but de rétablir leur équilibre et leur élasticité. Les tissus retrouvent leur mobilité, la personne recouvre ses fonctions et son état de bien-être dans une certaine fluidité.
                                <br /> <br />
                                La fasciathérapie est notamment indiquée pour :
                                <br /> <br />

                                - Les personnes anxieuses, en situation de stress, de fatigue, de burn-out, etc.
                                <br />
                                - Les douleurs chroniques telles que l’arthrose, les lombalgies, les cervicalgies, la fibromyalgie, les rhumatismes.
                                <br />
                                - Les douleurs aiguës, telles que les lumbagos, les sciatiques, les cruralgies, les torticolis, les tendinites.
                                <br />- La traumatologie : entorses, pathologies musculaires, après une intervention chirurgicale, en médecine du sport.
                                <br /> - Les pathologies de la sphère crânienne : céphalées, migraines, névralgies d’Arnold ou du trijumeau, acouphènes.
                                <br /> - Les pathologies de la sphère abdominale et uro-gynécologiques : troubles du transit, syndrome du côlon irritable, névralgies pudendales, règles douloureuses.


                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default Fasciatherapie
