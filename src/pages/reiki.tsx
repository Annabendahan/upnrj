import * as React from "react"
import Layout from '../components/layout'
import main from '../images/reiki/main.png'
import mainMob from '../images/reiki/main-mob.png'
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
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> Le Reiki</h2>
                            <p>
                                Le Reiki est une <span className="bold">technique énergétique Japonaise</span> développée par Mikao Usui à la fin du 19ème siècle. Les racines japonaises de son nom nous renvoient au mot « Rei » qui symbolise « le tout » c’est-à-dire le corps (ou la matière), l’âme et l’esprit. Le mot « -ki » fait quant à lui référence à l’énergie vitale présente en chaque être vivant.
                                <br /><br />

                                La pratique du Reiki intervient donc dans <span className="bold">l’harmonisation de l’énergie universelle avec l’énergie vitale</span> présente en chacun de nous.
                                <br /><br />
                                Avec la méthode Reiki, le praticien centralise les énergies telluriques, c’est à dire les énergies qui l’entourent, avant de la diffuser à son client. Il s’agit d’un traitement bien-être en profondeur.


                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>
                    <div className="page__box page__box__rev">
                        <div className="page__box__img">
                            <img src={p3} alt="main" />
                        </div>
                        <div className="page__box__text">
                            <p> En agissant sur les corps physiques, énergétiques et émotionnels, l’énergie Reiki peut rééquilibrer les causes profondes du problème.
                                Ainsi en prônant le « lâcher-prise », le praticien Reiki ne peut guider l’énergie, mais la laisse circuler là où il y en a besoin, permettant le rééquilibrage énergétique de son client.
                                <br /><br />

                                Voir aussi l’onglet Mémoire cellulaire                                <br /><br />
                                <span className="bold">
                                    Le Reïki est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default Reiki
