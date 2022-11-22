import * as React from "react"
import Layout from '../components/layout'
import main from '../images/path/main.png'
import mainMob from '../images/path/main-mob.png'
import p2 from '../images/path/p2.png'
import Grid from '@mui/material/Grid';




import '../components/style.scss'


// markup
const Pathologies = () => {
    return (
        <main>
            <title>Pathologies</title>
            <Layout >
                <div className="page">
                    <img className="page__main" src={main} alt="main" />
                    <img className="page__main-mob" src={mainMob} alt="main" />

                    <div className="page__box">
                        <div className="page__box__text">
                            <h2> Pathologies</h2>
                            <p>
                                Vous trouverez ci-dessous une liste des problèmes et pathologies pouvant être traités par les différentes techniques énoncées.
                                <br />
                                <br />
                                Pendant toute la durée des soins, un  <span className="bold">suivi régulier</span> est effectué afin de prendre connaissance des différentes phases de l’évolution vers la <span className="bold">guérison</span>.
                            </p>
                        </div>
                        <div className="page__box__img">
                            <img src={p2} alt="main" />
                        </div>

                    </div>
                    <div className="page__grid">

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p>
                                        <b>Douleurs à la tête</b> <br />
                                        - Acouphènes <br />
                                        - Vertiges<br />
                                        - Maux de tête<br />
                                        - Migraines
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p>
                                        <b>Douleurs musculaires</b><br />
                                        - Déchirures<br />
                                        - Claquages<br />
                                        - Elongations<br />
                                        - Crampes<br />
                                        - Torticolis
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p><b>Douleurs articulaires</b><br />
                                        - Arthrose<br />
                                        - Arthrite<br />
                                        - Rhumatisme</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p><b>Douleurs dorsales</b><br />
                                        - Lombalgie<br />
                                        - Sciatique<br />
                                        - Cruralgie<br />
                                        - Hernie discale<br />
                                        - Scoliose</p>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p>
                                        <b>Douleurs diverses</b><br />
                                        - Estomac<br />
                                        - Constipation<br />
                                        - Diarrhée<br />
                                        - Problèmes intestinaux<br />
                                        - Troubles digestifs<br />
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p>
                                        <b>Troubles respiratoires</b><br />
                                        - Asthme<br />
                                        - Problèmes pulmonaires<br />
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p><b>Problèmes buccaux</b><br />
                                        - Douleurs dentaires<br />
                                        - Gencives<br />
                                        - Aphtes</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p><b>Maladie de peau :</b><br />
                                        - Acné<br />
                                        - Eczéma<br />
                                        - Herpès<br />
                                        - Zona<br />
                                        - Psoriasis<br />
                                        - Mycose<br />
                                        - Verrues<br />
                                        - Cicatrisation<br />
                                        - Coupure, brûlure<br />
                                    </p>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p>
                                        <b>Problèmes veineux et sanguins </b><br />
                                        - Jambes lourdes<br />
                                        - Problèmes circulatoires<br />
                                        - Problèmes de tension artérielle<br />
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p>
                                        <b>Problèmes nerveux</b><br />
                                        - Dépression<br />
                                        - Stress<br />
                                        - Angoisse<br />
                                        - Anxiété<br />
                                        - Phobies<br />
                                        - Troubles du sommeil<br />

                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p><b>Problèmes comportementaux</b><br />
                                        - Enfants difficiles<br />
                                        - Hyperactivité<br />
                                        - Anorexie<br />
                                        - Boulimie<br />
                                        - Timidité</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div className="page__grid__card">
                                    <p><b>Problèmes gynécologiques et sexuels</b></p>
                                </div>
                            </Grid>


                        </Grid>
                    </div>

                </div>

            </Layout>
        </main>
    )
}

export default Pathologies