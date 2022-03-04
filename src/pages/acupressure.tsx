import * as React from "react"
import Layout from '../components/layout'
import main from '../images/acu/main.png'
import mainMob from '../images/acu/main-mob.png'
import p2 from '../images/acu/p2.png'



import '../components/style.scss'


// markup
const Acupressure = () => {
    return (
        <main>
            <title>Acupressure</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> L'acupressure</h2>
                            <p>
                                Technique de thérapie manuelle d’origine asiatique dérivée du Shiatsu, l’acupressure désigne <span className="bold">un type de médecine douce et alternative utilisant la pression des doigts sur différentes parties du corps humain.</span>   <br />   <br />

                                Également appelée ‘acupression’ ou ‘digipuncture’, cette technique naturelle vise à :
                                <br />
                                <br />
                                ● Aider à soulager la douleur ;
                                <br />
                                ● Limiter les effets du stress ;
                                <br />
                                ● Lutter contre la fatigue et l’anxiété ;
                                <br />
                                ● Participer au rééquilibrage énergétique à l’intérieur du corps ;
                                <br />
                                ● Améliorer la qualité du sommeil.
                                <br />  <br />

                                <span className="bold"> L’acupressure est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.</span></p>

                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>

                </div>

            </Layout>
        </main>
    )
}

export default Acupressure