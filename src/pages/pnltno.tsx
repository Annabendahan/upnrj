import * as React from "react"
import Layout from '../components/layout'
import main from '../images/pnl/main.png'
import mainMob from '../images/pnl/main-mob.png'

import p1 from '../images/pnl/p1.jpg'
import p2 from '../images/pnl/p2.jpg'
import p3 from '../images/pnl/p3.jpg'
import p4 from '../images/pnl/p4.jpg'




import '../components/style.scss'


// markup
const Pnltno = () => {
    return (
        <main>
            <title>Thérapies Neuro-Oculaires et Programmation Neuro-Linguistique (PNL)
            </title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2>Thérapies Neuro-Oculaires</h2>
                            <p>
                            Les  <span className="bold">thérapies neuro-oculaires</span> s’appuient sur la connexion entre les mouvements des yeux et les mécanismes cérébraux. 
Ce lien naturel est utilisé pour  <span className="bold">désactiver les blocages émotionnels</span> et favoriser la libération des traumatismes, des phobies, ou du stress profond.
                                <br /><br />
                                Cette approche permet de réactiver et de reprogrammer certaines <span className="bold">zones du cerveau</span> qui stockent des souvenirs difficiles ou des schémas comportementaux limitants. Grâce à des mouvements oculaires guidés, le cerveau réorganise les informations de manière plus saine et apaisée, procurant un sentiment de <span className="bold">légèreté et de sérénité.</span>

                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p1} alt="main" />
                        </div>

                    </div>
                    <div className="page__box page__box__rev">
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>
                        <div className="page__box__text">
                            <p> Applications : <br/><br/>
•	Traumatismes (PTSD, chocs émotionnels) <br/>
•	Gestion du stress et de l’anxiété <br/>
•	Phobies et peurs irrationnelles <br/>
•	Amélioration de la concentration et des performances <br/> <br/>

                                Cette thérapie douce et naturelle, issue de techniques comme l’EMDR, permet d’accéder rapidement à des <span className="bold">résultats concrets et durables</span>, tout en respectant le rythme de chacun.
                                <br /><br />

                            </p>
                        </div>
                    </div>
                    <div className="page__box">
                        <div className="page__box__text">
                            <h2>Programmation Neuro-Linguistique (PNL)
                            </h2>
                            <p>
                            La <span className="bold">PNL</span> est une méthode de <span className="bold">développement personnel</span> et de <span className="bold">transformation comportementale</span> basée sur la compréhension du langage du cerveau. 
Elle propose des outils puissants pour identifier et modifier les schémas mentaux, émotionnels et comportementaux qui freinent l’épanouissement personnel.
<br/><br/> En utilisant des techniques spécifiques, la PNL aide à :<br/><br/>

.     Changer les croyances limitantes<br/>
•	Améliorer la communication interpersonnelle<br/>
•	Développer la confiance en soi<br/>
•	Atteindre des objectifs personnels et professionnels<br/>

<br/>La PNL repose sur une approche pragmatique : comprendre <span className="bold">comment</span> vous fonctionnez pour <span className="bold">agir</span> différemment et retrouver une vie alignée avec vos aspirations.




                               
                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p3} alt="main" />
                        </div>

                    </div>
                    <div className="page__box page__box__rev">
                        <div className="page__box__img">
                            <img src={p4} alt="main" />
                        </div>
                        <div className="page__box__text">
                        <h2>Synergie des deux approches

                        </h2>
                            <p> Associées, les <span className="bold">thérapies neuro-oculaires</span> et la <span className="bold">PNL</span> offrent une solution complète pour libérer l’esprit des entraves du passé et cultiver de nouvelles perspectives. Votre thérapeute vous accompagne dans un cadre bienveillant pour faciliter ces transformations positives, tout en respectant votre individualité et vos besoins. 
                            <br/><span className="bold"> 
Découvrez un chemin vers le changement durable, la paix intérieure et un nouvel équilibre de vie</span>
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default Pnltno
