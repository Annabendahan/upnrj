import * as React from "react"
import Layout from '../components/layout'
import main from '../images/pr/main.png'
import mainMob from '../images/pr/main-mob.png'
import p2 from '../images/pr/p2.png'
import p3 from '../images/pr/p3.png'
import p4 from '../images/pr/p4.png'
import p5 from '../images/pr/p5.png'
import p6 from '../images/pr/p6.png'
import arrow from '../images/arrow.svg'





import '../components/style.scss'


// markup
const Contact = () => {
    return (
        <main>
            <title>Presse</title>
            <Layout >
                <div className="page">

                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__content">
                        <h2> Presse</h2>
                        <a target="_blank" href="https://www.lexpress.fr/styles/psycho/les-vrais-bienfaits-et-les-pouvoirs-du-reiki_2105485.html">
                            <div className="page__article">

                                <img className="page__article__img" src={p2} alt="main" />
                                <div className="page__article__text">
                                    <h3>Guérir par le toucher, réaligner ses énergies... Faut-il croire aux pouvoirs du reiki ?</h3><p>Pratiqué par des guérisseurs aux "doigts de fée", le reiki permettrait de soulager les douleurs et de faire circuler l'énergie dans le corps par simple apposition des mains. Souvent controversée, cette pratique de médecine japonaise ancestrale se démocratise de plus en plus en Occident.</p>
                                    <h5>L’Express, 2019</h5>
                                    <h6 >Lire l'article<img className="page__article__text__arrow" src={arrow} alt='/'></img></h6>

                                </div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.gala.fr/beaute/tendances_beaute/les-5-medecines-dites-paralleles-a-suivre-de-pres_458627">
                            <div className="page__article">
                                <img className="page__article__img" src={p3} alt="main" />
                                <div className="page__article__text">
                                    <h3>Bien-être : reiki, hypnose, magnétisme… 5 médecines parallèles à suivre de près</h3><p>Intuition, don, état de conscience modifié : il y a un petit plus qui se glisse dans ces pratiques pour nous aider à guérir, nous apaiser, nous retrouver. Que ce soit le reiki, l'hypnose, le magnétisme, le chamanisme ou la mémoire cellulaire, ces médecines dites parallèles trouvent un écho particulier surtout en ces temps troublés. Suivez le guide...</p>
                                    <h5>Gala, 2020</h5>
                                    <h6 >Lire l'article<img className="page__article__text__arrow" src={arrow} alt='/'></img></h6>
                                </div>
                            </div>
                        </a>
                     
                        <a target="_blank" href="https://sante.journaldesfemmes.fr/fiches-sante-du-quotidien/2600706-hypnose-techniques-bienfaits-comment-ca-marche/">
                            <div className="page__article">
                                <img className="page__article__img" src={p5} alt="main" />
                                <div className="page__article__text">
                                    <h3>Hypnose : techniques, bienfaits, comment ça marche ?</h3><p>L'hypnose est un état naturel au cours duquel l'attention au monde extérieur est diminuée pour permettre à l'inconscient d'être plus présent et de percevoir de nouvelles ressources. Sous hypnose, il va être possible de gérer la douleur, la dépression, le stress, améliorer la confiance en soi...</p>
                                    <h5>Le journal des femmes, 2020 </h5>
                                    <h6 >Lire l'article<img className="page__article__text__arrow" src={arrow} alt='/'></img></h6></div>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.magicmaman.com/qu-est-ce-que-l-hypnose-ericksonienne-et-dans-quels-cas-y-avoir-recours,3635613.asp">
                            <div className="page__article">
                                <img className="page__article__img" src={p6} alt="main" />
                                <div className="page__article__text">
                                    <h3 className="page__article__long">Qu'est-ce que l'hypnose ericksonienne et dans quels cas y avoir recours ?</h3>
                                    <h3 className="page__article__short">Qu'est-ce que l'hypnose ericksonienne et dans quels cas y avoir  <br/> recours ?</h3><p>Tabac, infertilité, poids, phobies... Les champs d'action de l'hypnothérapeute sont larges. Parmi les techniques reconnues, on entend souvent parler d'hypnose ericksonienne. Mais de quoi s'agit-il ? Et qui dans votre tribu peut être concerné par cette thérapie ?</p>
                                    <h5>Magicmaman, 2020 </h5>
                                    <h6 >Lire l'article<img className="page__article__text__arrow" src={arrow} alt='/'></img></h6></div>
                            </div>
                        </a>
                    </div>




                </div>

            </Layout>
        </main >
    )
}

export default Contact