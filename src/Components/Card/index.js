import React from 'react'

const Card = ({name}) => {
    return (
        
        <div class="col s10 offset-s1 m4 l3">
            <div className="cardContainer">
            <div class="card">
                <div class="card-image">
                <img src="https://cdn.pixabay.com/photo/2020/03/20/16/00/quran-4951037__340.jpg" />
                <span class="card-title">{name}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red btn-large"><i style={{top:'0px'}} class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                <p>{name} : I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
            </div>
        </div>
       
    )
}

export default Card
