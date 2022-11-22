import * as React from "react"
import Layout from '../components/layout'
import main from '../images/hyp/main.png'
import mainMob from '../images/hyp/main-mob.png'

import p1 from '../images/hyp/p1.png'
import p2 from '../images/hyp/p2.png'
import p4 from '../images/mem/p4.png'
import p5 from '../images/mem/p5.png'




import '../components/style.scss'


// markup
const Hypnose = () => {
    return (
        <main>
            <title>Hypnose</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2>L'hypnose thérapeutique</h2>
                            <p>
                            L’hypnose désigne à la fois une  <span className="bold">technique thérapeutique</span> et <span className="bold">un état modifié de conscience.</span>
                            <br /><br />
                                C’est une thérapie dite brève, une méthode douce, naturelle et efficace, qui favorise
                                des <span className="bold">changements rapides, profonds et durables</span> dont vous seul êtes à l’origine. 
                                Grâce à l’hypnose, on ne cherche pas <span className="bold">POURQUOI</span> on ne va pas bien, mais <span className="bold">COMMENT</span> faire
                                pour aller mieux.
                                ​
                                L‘hypnose Ericksonienne, inventée par Milton Erickson, est la branche la plus répandue de
                                l’hypnose thérapeutique et elle est bien loin de l’hypnose de spectacle. 

                        <br /><br />
                                ​
                        <span className="bold">Elle est respectueuse de l’intégrité de la personne et bienveillante.</span>
                        <br /><br />

                        « Chacun gagnera à utiliser l’hypnose pour atteindre ses objectifs et se sentir mieux ! » - Milton Erickson
                                                    </p>

                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>
                    <div className="page__box page__box__rev">
                        <div className="page__box__img">
                            <img src={p1} alt="main" />
                        </div>
                        <div className="page__box__text">
                            <h2>L’état modifié de conscience en hypnose </h2>
                            <p>
                        
L’EMC en hypnose crée un équilibre entre les deux hémisphères de notre cerveau, c’est-à-
dire entre notre esprit logique/rationnel et notre esprit intuitif/créatif. L’induction de l’état
modifié de conscience permet à un hypnothérapeute de <span className="bold">faciliter l’accès à l’inconscient du
patient</span> et lui rendre ainsi accessibles les <span className="bold">nombreuses ressources</span> peu exploitées de son
cerveau. 
<br /><br />
Grâce à ses suggestions, le praticien peut <span className="bold">activer les capacités d’auto-guérison inhérentes à
l’individu</span> tout en se frayant un chemin vers l’identification des éléments de sa vie qui ont de
l’importance pour la thérapie. L’état de transe en hypnose est quelque peu différent des
autres EMC car il dissocie le conscient et l’inconscient. Ceci permet de <span className="bold">dépasser les blocages </span> 
de la conscience pour pouvoir <span className="bold">accéder aisément au potentiel caché</span> que nous détenons
tous.
                            </p>
                        </div>
                    </div>
                    <div className="page__centered">
                    <h2>Exemples de cas cliniques et d’intervention en hypnose</h2>

                    <div className="page__centered__line">

                        <div className="page__centered__text">
                            <p>
                            <b>Gestion de la douleur</b><br /><br />
                            ● Diminuer la douleur induite par les soins, on parle alors d’hypnoanalgésie
                            <br />
                            ● Diminuer et mieux gérer les douleurs chroniques comme la fibromyalgie,
l’endométriose ou les douleurs lombaires
<br />
● Gestion des migraines : apprendre à repérer les signes précurseurs et éviter que la
douleur s’installe
<br />
● Préparer un geste douloureux (soins dentaires, chirurgie, etc…) afin de mieux vivre le
soin
                            </p>

                        </div>
                        <div className="page__centered__text">
                           <p><b>Troubles anxieux</b>
                           <br /><br />
                           ● Apprendre à mieux gérer le stress au quotidien<br />
                           ● Prévention du Burn-out (épuisement professionnel)<br />
                           ● Réduire l’anxiété anticipatoire négative c’est-à-dire la peur de l’échec
(examen, BAC, permis de conduire, présentation, auditions…) qui paralyse et
empêche de donner le meilleur de soi-même le jour “J”<br />
● Réduire le stress lié à une chirurgie et ses éventuelles complications<br />
● S’endormir facilement et rapidement<br />
● Diminuer les pensées parasites qui empêchent de s’endormir<br />
● Avoir un sommeil réparateur</p>
                        </div>
                        </div>
                        <div className="page__centered__line">
                        <div className="page__centered__text">
                            <p>
                             <b>Gestion des émotions </b>
                             <br /><br />
                             ● Apprendre à s’affirmer, à dire non, faire une critique constructive, répondre à
une critique destructrice… 
<br />
● Améliorer l’estime de soi
<br />
● Pouvoir s’accorder de la valeur, reconnaître ses qualités
<br />
● Se sentir solide, confiant en son avenir
<br />
● Cultiver son énergie positive
                            </p>
                         </div>
                         <div className="page__centered__text">

                            <p><b> Arrêt du tabac</b><br /><br />
                            ● Se libérer de la cigarette durablement et en toute sérénité, sans
compensation, et donc sans prise de poids
<br />
● Comprendre et connaître les raisons qui vous poussent à fumer afin de
prendre appui dessus et vous accompagner dans ce processus de changement</p>

                        </div>
                            </div>

                            <div className="page__centered__line">
                        <div className="page__centered__text">
                            <p>
                           <b> Préparation physique et mentale </b>(musiciens, chanteurs, acteurs, sportifs, étudiants
en préparation d’examen, candidat pour un entretien, prise de parole en public…),
                            </p>
                         </div>
                        
                            </div>



                    </div>
                  
                   
                </div>

            </Layout>
        </main>
    )
}

export default Hypnose
