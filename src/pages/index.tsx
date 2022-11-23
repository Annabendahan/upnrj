import * as React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby';


import '../components/style.scss'
import main from '../images/accueil/main.png'
import mainMob from '../images/accueil/main-mob.png'
import p2 from '../images/accueil/p2.png'
import p3 from '../images/accueil/p3.png'
import p4 from '../images/accueil/p4.png'
import p5 from '../images/accueil/p5.png'
import p8 from '../images/accueil/p8.png'
import pascal from '../images/pascal.png'



// markup
const IndexPage = () => {
  return (
    <main>
      <title>Accueil</title>
      <Layout >
        <div className="page">
          <img className="page__main" src={main} alt="main" />
          <img className="page__main-mob" src={mainMob} alt="main" />
          <div className="page__box">
            <div className="page__box__text">
              <h2> Vous n’êtes pas ici par hasard !</h2>
              <p>

                Vous ressentez le besoin de trouver un moyen de soulager une douleur, accélérer une guérison ou simplement améliorer votre bien-être ?
                Je peux vous y aider.
              </p>

            </div>
            <div className="page__box__img">
              <img src={p2} alt="main" />
            </div>

          </div>
          <div className="page__pres">
            <div className="page__pres__content">
              <h2> Qui suis-je ? </h2>
              <p>
                Je suis praticien de techniques visant à <b>ré-équilibrer les énergies du corps</b> ou débloquer les nœuds énergétiques pour favoriser la guérison.
                <br />
                Je me suis rendu compte il y a de nombreuses années, de manière tout à fait fortuite, que je possédais cette  <b>faculté de soulager la douleur.</b>
                <br /><br />

                Une amie se plaignait de douleurs dorsales. Sans en comprendre la raison, j’ai instinctivement posé mes mains sur son dos. Elle a aussitôt senti une chaleur intense et il n’a fallu que quelques minutes pour que la douleur s’atténue et enfin disparaisse.
              </p>
              <div className="page__pres__box ">

                <div className="page__pres__box__img">
                  <img src={pascal} alt="main" />
                </div>
                <div className="page__pres__box__text">
                  <p>
                    Puis, au fil des années, je proposai spontanément un traitement express pour soulager les douleurs de mes proches.
                    <br /><br />

                    Au fil du temps, j’ai acquis de l’expérience et, pour en faire mon activité professionnelle, j’ai souhaité la compléter avec  d’autres techniques telles que le Reiki et l’Hypnose. <br /><br />


                    Un 2ème dégré de praticien <b>Reïki</b> me permet maintenant de proposer, avec le <b>magnétisme</b>, <b>l’acupression</b> et <b>la fasciathérapie</b>, un panel de traitements adaptés à la plupart des pathologies.
                    Une formation certifiée d’un <b>diplôme d’Hypnothérapeute</b> apporte une efficacité accrue lors des soins que je délivre pour de nombreuses pathologies. <br /> Je suis déclaré à l’URSAFF dans le cadre d’une activité de santé humaine.
                    <br /><br />

                    Toutes ces techniques ont un point commun: <b>La mémoire cellulaire.</b><br />
                    L’ensemble est décrit dans les différents onglets du site.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="page__soins">
            <h2> Les soins proposés  </h2>

            <div className="page__soins__line">
              <Link to="/magnetisme" className="page__soins__card">
                <img src={p3} alt="main" />
                <p>MAGNÉTISME</p>
              </Link>
              <Link to="/reiki" className="page__soins__card">
                <img src={p4} alt="main" />
                <p>REIKI</p>
              </Link>
            </div>
            <div className="page__soins__line">
              <Link to="/hypnose" className="page__soins__card">
                <img src={p8} alt="main" />
                <p>HYPNOSE</p>

              </Link>
              <Link to="/acupression" className="page__soins__card">
                <img src={p5} alt="main" />
                <p>ACUPRESSION ET FASCIATHÉRAPIE</p>

              </Link>
            </div>
          </div>

        </div>
      </Layout>
    </main >
  )
}

export default IndexPage
