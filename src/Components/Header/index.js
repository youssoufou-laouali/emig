import React, {useState} from 'react'
import Cheveron from './Icon'
import Mobile from './Mobile'
import logoAemnEmig from '../../images/logoAemnEmig.png'
import './style.css'

const Header = () => {
    const [openMobile, setOpenMobile] = useState(false)
    const handleMobile= ()=>{
        setOpenMobile(!openMobile)
    }
    
    return (
        <div style={{position:'fixed', top:0, width:'100%', zIndex:500}}>
            
            <div className='menuBar'>
                <ul>
                    <li className='active'>Activités de l'AEMN-EMIG <Cheveron name='arrow_drop_down' />
                        <div className='subMenu1'>
                            <ul>
                                <li className='hoverMe'>Présentation à la mosqué <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>Aquida</li>
                                            <li>Erreur de priere</li>
                                            <li>Fiqhu</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li>Conférence</li>
                                <li>Affiche hebdomadaire</li>
                            </ul>
                        </div>
                    </li>
                    <li>Concours <Cheveron name='arrow_drop_down' />
                        <div className='subMenu1'>
                            <ul>
                                <li className='hoverMe'>EMIG <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>Cycle Technicien Superieur</li>
                                            <li>Cycle Ingénieur</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li>BTS d'Etat</li>
                                <li>Lycée d'excellence</li>
                            </ul>
                        </div>
                    </li>
                    <li>Devoirs EMIG <Cheveron name='arrow_drop_down' />
                    <div className='subMenu1'>
                            <ul>
                                <li className='hoverMe'>Ensegnement Generaux <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>TS/TC</li>
                                            <li>IG/TC</li>
                                            <li>Cours Communs</li>
                                        </ul>
                                    </div>   
                                </li>

                                <li className='hoverMe'>Geoscience <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>TS/OGC2</li>
                                            <li>TS/OGC3</li>
                                            <li>IG/OGC2</li>
                                            <li>IG/OGC3</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe'>Genie Electrique<Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>TS/OAI2</li>
                                            <li>TS/OAI3</li>
                                            <li>IG/OGE2</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe'>Genie Informatique <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>TS/OII2</li>
                                            <li>IG/OII2</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe'>Genie Mecanique <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>TS/OMI2</li>
                                            <li>TS/OMI3</li>
                                            <li>IG/OEM2</li>
                                            <li>IG/OEM3</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe'>Genie Minier et Environnement <Cheveron name='chevron_right' />
                                    <div className='subMenu2'>
                                        <ul>
                                            <li>TS/OMV2</li>
                                            <li>TS/OMV3</li>
                                            <li>TS/OEE2</li>
                                            <li>TS/OEE3</li>
                                            <li>IG/OME2</li>
                                            <li>IG/OME3</li>
                                        </ul>
                                    </div>   
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>Devoirs Lycée d'Excellence <Cheveron name='arrow_drop_down' />
                        <div className='subMenu1'>
                            <ul>
                                <li>Seconde C</li>
                                <li>Première C</li>
                                <li>Première D</li>
                                <li>Terminale C</li>
                                <li>Terminale D</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div style={{position:'absolute', left:10, top:20, color:'white', cursor: 'pointer'}} onClick={()=>handleMobile()}><a class="btn-floating pulse" style={{ backgroundColor:'rgb(0,200,0)'}}><Cheveron name='menu' /></a></div>
            <div style={{position:'fixed', right:5, top: 0, backgroundColor:'rgba(255,255,255,1)', borderRadius:20, border:'2px dotted green'}} ><img src={logoAemnEmig} alt="" /></div>
            {openMobile && <Mobile handleMobile={handleMobile} />}
        </div>
    )
}

export default Header
