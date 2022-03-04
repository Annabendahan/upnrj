import * as React from "react"
import Layout from '../components/layout'
import main from '../images/con/main.png'
import mainMob from '../images/con/main-mob.png'
import pascal from '../images/pascal.png'



import '../components/style.scss'


// markup
const Contact = () => {
    return (
        <main>
            <title>Contact et tarifs</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> Contact et Tarif</h2>
                            <p>
                                Pascal NEYRAT <br />   <br />
                                Je vous reçois sur rendez-vous du lundi au samedi à mon cabinet au
                                70 rue du Clos Bernard à Rosières (60440)                                <br />
                                <br />
                                <span className="bold">
                                    Tel: 06 61 38 84 70   <br />
                                    Mail: Upnrj@orange.fr   <br />
                                </span>
                                <br />
                                Le tarif de la 1ère séance (1h30) et des séances suivantes (1h) est de 50€.
                                <br /> <br />
                                Merci de me contacter 5 minutes avant votre arrivée et de respecter l’heure de rendez-vous car je n’ai pas de salle d’attente.
                            </p>
                        </div>
                        <div className="page__box__img">
                            <img src={pascal} alt="main" />
                        </div>

                    </div>

                </div>

            </Layout>
        </main>
    )
}

export default Contact