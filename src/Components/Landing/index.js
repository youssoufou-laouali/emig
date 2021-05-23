import React from 'react'
import Header from '../Header'
import Slider from '../Slider'
import Search from '../Search/Search'
import Card from '../Card'
import Footer from '../Footer'
import Historique from '../Historique'

const Landing = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Search />
            <div className="Titre center" >
                <h3>Les actualités à l'EMIG</h3>
            </div>
            <div className="row grey lighten-4">
                <Card name="Epreuves Examens" />
                <Card name="Epreuves Devoirs" />
                <Card name="Makaranta" />
                <Card name="Annonces" />
                <Card name="Conference" />
                <Card name="Affiches Hebdomadaire" />
                <Card name="Historique de L'AEMN" /> 
                <Card name="Membre de L'AEMN-EMIG" /> 
            </div>
            <div className="Titre Titre2 center" >
                <h3>Historique de L'AEMN</h3>
            </div>
            <Historique />
            <Footer />
        </div>
    )
}

export default Landing
