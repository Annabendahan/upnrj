import * as React from "react"
import Layout from '../components/layout'
import main from '../images/mem/main.png'
import mainMob from '../images/mem/main-mob.png'

import p2 from '../images/mem/p2.png'
import p3 from '../images/mem/p3.png'
import p4 from '../images/mem/p4.png'
import p5 from '../images/mem/p5.png'




import '../components/style.scss'


// markup
const MemoireCellulaire = () => {
    return (
        <main>
            <title>Memoire Cellulaire</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2>Qu’est-ce que
                                la mémoire cellulaire ?</h2>
                            <p>
                                Le  bien-être du corps est lié à la <span className="bold">qualité des émotions</span>, lui-même lié à la pacification mentale.
                                <br /><br />
                                Le corps manifeste de manière intelligente toutes ses frustrations, ses souffrances, ses colères par un langage subtil. Lorsque l’esprit refuse de l’écouter, celui-ci crée des maux physiques voire chroniques qui ne sont que les manifestations de nos émotions conflictuelles refoulées. Les centres énergétiques seront alors perturbés dans leur bon fonctionnement ne laissant <span className="bold">plus circuler l’énergie de manière harmonieuse</span>.


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
                            <p> Cette technique particulière de mémoire cellulaire issue de la sagesse tibétaine permet d’<span className="bold">augmenter la résonance énergétique des corps subtils et d’en expulser les particules polluantes</span>. Ainsi les tensions sont relâchées, la mémoire cellulaire se débarrassant petit à petit de ses couches encombrantes du passé.
                                <br /><br />
                                Une forme de libération et de légèreté tant physique que psychique est perçue, activant ainsi la régénération des cellules. Apaisement et Équilibre se feront ressentir, Objectivité, Lucidité et Confiance se développeront. L’intuition également sera nettement améliorée. Cependant une fois que le reset aura été initialisé, il est important de faire un travail conscient afin de préserver ses énergies.
                                <br /><br />
                                Apprendre à nous protéger, à <span className="bold">renforcer notre Être intérieur</span> est primordial pour retrouver notre équilibre naturel et notre santé.

                            </p>
                        </div>
                    </div>
                    <div className="page__box">
                        <div className="page__box__text">
                            <h2>Harmonisation des énergies
                                Travail sur les champs auriques</h2>
                            <p>
                                Ce soin puissant permet de restaurer le flot énergétique du corps, parfois interrompu en cas de maladies graves ou de traumatismes profonds.
                                Il agit sur les corps subtils qui entourent notre corps physique pour <span className="bold">libérer les blocages, peurs et émotions accumulées</span> avec le temps à la suite de circonstances douloureuses de notre existence.
                                Ainsi nous pourrons faire le deuil de personnes ou de situations passées en cicatrisant les parties blessées de notre Âme. Ce traitement libère des entraves placées dans notre structure énergétique et renforce le pouvoir naturel de Guérison de l’Être dans sa globalité.


                            </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p4} alt="main" />
                        </div>

                    </div>
                    <div className="page__box page__box__rev">
                        <div className="page__box__img">
                            <img src={p5} alt="main" />
                        </div>
                        <div className="page__box__text">
                            <p> Au cours de la transmission, vous recevez l’Énergie qui correspondra parfaitement à vos besoins afin d’activer la <span className="bold">Purification des Chakras</span> et permettre l’élévation du plan vibratoire pour harmoniser les champs Auriques.
                                Un réalignement sur tous les plans, tant physique qu’émotionnel et énergétique est nécessaire pour accéder à l’unification de nos corps subtils et spirituels. Notre Guérison passe par la connexion et la reconnaissance de notre personnalité à notre Moi profond.
                                <br /><br />
                                Ainsi à l’écoute de notre Âme, nous serons alors capables de réaliser nos désirs, nos aspirations, en percevant pleinement le but de notre vie. En incarnant notre  <span className="bold">véritable Nature, Joie, Sérénité et Paix profonde</span> seront au rendez-vous.
                                <br /><br />
                                Ce traitement est délivré lors de séances de Reïki.
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </main>
    )
}

export default MemoireCellulaire
