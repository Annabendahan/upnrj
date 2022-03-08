import * as React from "react"
import Layout from '../components/layout'
import mainMob from '../images/magn/main-mob.png'
import p2 from '../images/magn/p2.png'
import main from '../images/magn/mainbis.png'
import p3 from '../images/magn/p3.png'



import '../components/style.scss'


// markup
const Magnetisme = () => {
    return (
        <main>
            <title>Magnetisme</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> Le magnétisme,
                                une médecine douce.</h2>
                            <p>
                                La pratique du magnétisme est ancestrale.<br />
                                Il consiste à <span className="bold">transférer l’énergie personnelle du magnétiseur au receveur</span>. Les mains restant le vecteur du transfert de l’énergie. Le transfert d’énergie effectué, le receveur peut entamer sa guérison. L’action s’opère au niveau physique ou psychique.
                                <br /><br />

                                Au niveau physique, les effets sont ressentis rapidement, de manière progressive ou instantanée. Néanmoins, certaines pathologies nécessitent plusieurs séances<br /> (notamment dans le cas de douleurs chroniques).
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
                            <p> C’est aussi le cas au <span className="bold">niveau psychique</span>, où la plupart des pathologies (stress, dépression, insomnies, …) nécessite plusieurs séances.
                                Enfin, la réceptivité de chacun influe sur les résultats et la rapidité pour les atteindre.
                                <br /><br />
                                <span className="bold">

                                    Dans tous les cas, le magnétisme est sans effet secondaire.
                                    <br /><br />

                                    Le magnétisme est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.</span>
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default Magnetisme
