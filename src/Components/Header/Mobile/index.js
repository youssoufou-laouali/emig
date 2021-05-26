import React,{ useState, useEffect} from 'react'
import M from "materialize-css";
import './style.css'
import Modal from '../../Modal'
import Cheveron from '../Icon'
import { useHistory} from 'react-router-dom'
import firebase from '../../Firebase'

const Mobile = ({handleMobile}) => {

    const [mod, setMod] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleModale=()=>{
        setMod(!mod)
    }
    let history = useHistory();

    useEffect(() => {
        let elems = document.querySelectorAll('.collapsible');
         M.Collapsible.init(elems, {accordion:true});
         let spp= document.querySelector('.Mobile');
         spp.addEventListener('click', (e)=>{
           e.stopPropagation()

           if(e.target.textContent=='Se connecter'){
               handleModale()
               let aaa= document.getElementById('CONNECTER')
               aaa.addEventListener('click', (e)=>{
                   e.stopPropagation()
               })
           }
         })
    }, [])

    const handleConnecte=(e)=> {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(e=>{
            if(e.user.getIdToken()){
                localStorage.setItem('ID', e.user.getIdToken())
                localStorage.setItem('email', e.user.email)
                handleModale()
                handleMobile()
                history.push("/add");
            }else{
                localStorage.clear();
            }
        })
        .catch(errors=>{
            console.log(errors);
            localStorage.clear();
        })
    }

    

    return (
        <div className="Mobile-Container" onClick={()=>handleMobile()}>
            {
                mod && (
                    <Modal close={handleModale}>
                        <div id='CONNECTER'>
                            <h3>Se connecter</h3>
                            <div class="row">
                                <form class="col s8" onSubmit={(e)=>handleConnecte(e)}>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">email</i>
                                            <input id="icon_prefix" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="validate" />
                                            <label for="icon_prefix">Email</label>
                                        </div>
                                        <div class="input-field col s12">
                                            <i class="material-icons prefix">remove_red_eye</i>
                                            <input id="icon_telephone" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" class="validate" />
                                            <label for="icon_telephone">Mot de Passe</label>
                                        </div>
                                        <div>
                                            <button class="btn waves-effect waves-light" type="submit">Envoyer
                                            </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </Modal>
                )
            }
        <div className='Mobile'>
            
            <div className='menuBarMobile'>
                <ul>
                    <li><span className='labbel'> Activités de l'AEMN-EMIG</span>
                        <div>
                            <ul className='collapsible'>
                                <li className='hoverMe collapsible-header'><span className='labbel2' > Présentation à la mosqué <Cheveron name='arrow_drop_down' /> </span>
                                    <div className='subMenu2-mobile collapsible-body'>
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
                                    <div className='subMenu2-mobile collapsible-body'>
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
                    <li><span className='labbel'>Administration</span> 
                        <div>
                            <ul>
                                <li><span className='labbel2'>Se connecter</span></li>
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
