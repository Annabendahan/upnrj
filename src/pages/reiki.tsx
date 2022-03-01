import * as React from "react"
import Layout from '../components/layout'
import main from '../images/reiki/main.png'
import p2 from '../images/reiki/p2.png'
import p3 from '../images/reiki/p3.png'



import '../components/style.scss'


// markup
const Reiki = () => {
    return (
        <main>
            <title>Reiki</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> Le Reiki</h2>
                            <p>
                                En agissant sur les corps physiques, énergétiques et émotionnels, l’énergie Reiki peut rééquilibrer les causes profondes du problème.
                                Ainsi en prônant le « lâcher-prise », le praticien Reiki ne peut guider l’énergie, mais la laisse circuler là où il y en a besoin, permettant le rééquilibrage énergétique de son client.

                                La pratique du Reiki intervient donc dans l’harmonisation de l’énergie universelle avec l’énergie vitale présente en chacun de nous.
                                Avec la méthode Reiki, le praticien centralise les énergies telluriques, c’est à dire les énergies qui l’entourent, avant de la diffuser à son client. Il s’agit d’un traitement bien-être en profondeur.


                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>
                    <div className="page__box">
                        <div className="page__box__img">
                            <img src={p3} alt="main" />
                        </div>
                        <div className="page__box__text">
                            <p> En agissant sur les corps physiques, énergétiques et émotionnels, l’énergie Reiki peut rééquilibrer les causes profondes du problème.
                                Ainsi en prônant le « lâcher-prise », le praticien Reiki ne peut guider l’énergie, mais la laisse circuler là où il y en a besoin, permettant le rééquilibrage énergétique de son client.
                                <br /><br />

                                Voir aussi l’onglet Mémoire cellulaire                                <br /><br />

                                Le Reïki est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default Reiki
