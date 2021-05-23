import React,{ useEffect} from 'react'
import M from "materialize-css";
import './style.css'
import Cheveron from '../Icon'

const Mobile = ({handleMobile}) => {

    useEffect(() => {
        let elems = document.querySelectorAll('.collapsible');
         M.Collapsible.init(elems, {accordion:true});
         let spp= document.querySelector('.Mobile');
         console.log(spp);
         spp.addEventListener('click', (e)=>{
            e.stopPropagation()
         })
    }, [])

    return (
        <div className="Mobile-Container" onClick={()=>handleMobile()}>
        <div className='Mobile'>
            
            <div className='menuBarMobile'>
                <ul>
                    <li><span className='labbel'> Activités de l'AEMN-EMIG</span>
                        <div>
                            <ul className='collapsible'>
                                <li className='hoverMe collapsible-header'><span className='labbel2' > Présentation à la mosqué <Cheveron name='arrow_drop_down' /> </span>
                                    <div className='collapsible-body'>
                                        <ul>
                                            <li>Aquida</li>
                                            <li>Erreur de priere</li>
                                            <li>Fiqhu</li>
                                        </ul>
                                    </div>  
                                </li>
                                <li><span className='labbel2'>Conférence</span></li>
                                <li><span className='labbel2'>Affiche hebdomadaire</span></li>
                            </ul>
                        </div>
                    </li>
                    <li><span className='labbel'>Concours</span> 
                        <div>
                            <ul className='collapsible'>
                                <li className='hoverMe collapsible-header'><span className='labbel2'>EMIG <Cheveron name='arrow_drop_down' /></span>
                                    <div className='collapsible-body'>
                                        <ul>
                                            <li>Cycle Technicien Superieur</li>
                                            <li>Cycle Ingénieur</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li><span className='labbel2'>BTS d'Etat</span></li>
                                <li><span className='labbel2'>Lycée d'excellence</span></li>
                            </ul>
                        </div>
                    </li>
                    <li><span className='labbel'> Devoirs EMIG </span>
                    <div>
                            <ul className='collapsible'>
                                <li className='hoverMe collapsible-header'><span className='labbel2'>Ensegnement Generaux <Cheveron name='arrow_drop_down' /></span>
                                    <div className='subMenu2-mobile collapsible-body'>
                                        <ul>
                                            <li>TS/TC</li>
                                            <li>IG/TC</li>
                                            <li>Cours Communs</li>
                                        </ul>
                                    </div>   
                                </li>

                                <li className='hoverMe collapsible-header'><span className='labbel2'>Geoscience <Cheveron name='arrow_drop_down' /></span>
                                    <div className='subMenu2-mobile collapsible-body'>
                                        <ul>
                                            <li>TS/OGC2</li>
                                            <li>TS/OGC3</li>
                                            <li>IG/OGC2</li>
                                            <li>IG/OGC3</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe collapsible-header'><span className='labbel2'>Genie Electrique <Cheveron name='arrow_drop_down' /></span>
                                    <div className='subMenu2-mobile collapsible-body'>
                                        <ul>
                                            <li>TS/OAI2</li>
                                            <li>TS/OAI3</li>
                                            <li>IG/OGE2</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe collapsible-header'><span className='labbel2'>Genie Informatique <Cheveron name='arrow_drop_down' /></span>
                                    <div className='subMenu2-mobile collapsible-body'>
                                        <ul>
                                            <li>TS/OII2</li>
                                            <li>IG/OII2</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe collapsible-header'><span className='labbel2'>Genie Mecanique <Cheveron name='arrow_drop_down' /></span>
                                    <div className='subMenu2-mobile collapsible-body'>
                                        <ul>
                                            <li>TS/OMI2</li>
                                            <li>TS/OMI3</li>
                                            <li>IG/OEM2</li>
                                            <li>IG/OEM3</li>
                                        </ul>
                                    </div>   
                                </li>
                                <li className='hoverMe collapsible-header'><span className='labbel2'>Genie Minier et Environnement <Cheveron name='arrow_drop_down' /></span>
                                    <div className='subMenu2-mobile collapsible-body'>
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
                    <li><span className='labbel'>Devoirs Lycée d'Excellence </span> 
                        <div>
                            <ul>
                                <li><span className='labbel2'>Seconde C</span></li>
                                <li><span className='labbel2'>Première C</span></li>
                                <li><span className='labbel2'>Première D</span></li>
                                <li><span className='labbel2'>Terminale C</span></li>
                                <li><span className='labbel2'>Terminale D</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Mobile