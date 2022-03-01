import * as React from "react"
import Layout from '../components/layout'
import main from '../images/magn/main.png'
import p2 from '../images/magn/p2.png'
import mainbis from '../images/magn/mainbis.png'
import p3 from '../images/magn/p3.png'



import '../components/style.scss'


// markup
const Magnetisme = () => {
    return (
        <main>
            <title>Magnetisme</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={mainbis} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> Le magnétisme,
                                une médecine douce.</h2>
                            <p>
                                La pratique du magnétisme date de temps immémoriaux.
                                Il consiste à transférer l’énergie personnelle du magnétiseur à son client. Les mains restant le vecteur du transfert de l’énergie. Le transfert d’énergie effectué, le receveur peut entamer sa guérison. Dans le cas du magnétisme l’action s’opère au niveau physique ou psychique.
                                <br /><br />

                                Au niveau physique, les effets sont ressentis rapidement, progressivement ou instantanément. Néanmoins, certaines pathologies nécessitent plusieurs séances (notamment dans le cas de douleurs chroniques).
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
                            <p> C’est aussi le cas au niveau psychique, où la plupart des pathologies (stress, dépression, insomnies, …) nécessite plusieurs séances.
                                Enfin, la réceptivité de chacun influe sur les résultats et la rapidité pour les atteindre.
                                <br /><br />

                                Dans tous les cas, le magnétisme est sans effet secondaire.
                                <br /><br />

                                Le magnétisme est un complément précieux et bénéfique au traitement médical qu’il ne faut pas interrompre sans l’avis de votre médecin.
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default Magnetisme
