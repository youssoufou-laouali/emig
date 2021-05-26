import React,{useEffect, useState} from 'react'
import firebase from '../Firebase'
import Spiner from '../Spiner'
import M from "materialize-css";
import {useHistory} from 'react-router-dom'


const Add = () => {
    let db = firebase.firestore();
    let storage = firebase.storage();
    const history = useHistory()

    useEffect(() => {
        let elems = document.querySelectorAll('select');
         M.FormSelect.init(elems, {}); 
    }, [])
    
    useEffect(() => {
        if(!localStorage.getItem('ID')){
            history.push('/')
        }
    }, [])
    
    const [groupe, setGroupe] = useState('')
    const [pourcentage, setPourcentage] = useState(0)
    const [display, setDisplay] = useState(false)

    let email = localStorage.getItem('email')

    const handleFile = (e)=>{

    setDisplay(true)
    const uploadTask = storage.ref('pdf').child(e.target.files[0].name).put(e.target.files[0])
    console.log(e.target.files[0]);
    let name= e.target.files[0].name
    name= name.toLowerCase()
    name=name.substring(0,name.length-4)
    let arrayName=[]
    for(let i=1; i< name.length + 1; i++){
        arrayName.push(name.substring(0, i))
    }
    console.log(arrayName);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress =Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setPourcentage(progress)
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
    }, 
    (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
        case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
        case 'storage/canceled':
            // User canceled the upload
            break;

        // ...

        case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
    }, 
    () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            
            db.collection('pdf').add({
                name, url:downloadURL, groupe, arrayName, addedBy: email
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                setDisplay(false)
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                setDisplay(false)
            });
        });
    }
    );

    }

    return (
        <div className='mt'>
            {
                display && (
                    <Spiner pourcentage={pourcentage} />
                )
            }
            
            <form className="row">
                <div class="input-field col s6">
                    <select id='groupe' onChange={(e)=> setGroupe(e.target.value)}>
                        <optgroup label="Concours">
                            <option value="concour TS">EMIG-TS</option>
                            <option value="concour IG">EMIG-IG</option>
                            <option value="concour BTS">BTS</option>
                            <option value="concour LE">LYCEE EXCELLENCE</option>
                        </optgroup>

                        <optgroup label="Enseignement Genereaux">
                            <option value="TS/TC">TS/TC</option>
                            <option value="IG/TC">IG/TC</option>
                            <option value="CC">Cours Communs</option>
                        </optgroup>

                        <optgroup label="Geoscience">
                            <option value="TS/OGC2">TS/OGC2</option>
                            <option value="TS/OGC3">TS/OGC3</option>
                            <option value="IG/OGC2">IG/OGC2</option>
                            <option value="IG/OGC3">IG/OGC3</option>
                        </optgroup>

                        <optgroup label="Genie Electrique">
                            <option value="TS/OAI2">TS/OAI2</option>
                            <option value="TS/OAI3">TS/OAI3</option>
                            <option value="IG/OGE2">IG/OGE2</option>
                        </optgroup>

                        <optgroup label="Genie Informatique">
                            <option value="TS/OII2">TS/OII2</option>
                            <option value="IG/OII2">IG/OII3</option>
                        </optgroup>

                        <optgroup label="Genie Mecanique">
                            <option value="TS/OMI2">TS/OMI2</option>
                            <option value="TS/OMI3">TS/OMI3</option>
                            <option value="IG/OEM2">IG/OEM2</option>
                            <option value="IG/OEM3">IG/OEM3</option>
                        </optgroup>

                        <optgroup label="Genie Minier et Environnement">
                            <option value="TS/OMV2">TS/OMV2</option>
                            <option value="TS/OMV3">TS/OMV3</option>
                            <option value="TS/OEE2">TS/OEE2</option>
                            <option value="TS/OEE3">TS/OEE3</option>
                            <option value="IG/OME2">IG/OME2</option>
                            <option value="IG/OME3">IG/OME3</option>
                        </optgroup>
                        <optgroup label="LYCEE D'EXCELLENCE">
                            <option value="EXSC">Seconde C</option>
                            <option value="EXPC">Premiere C</option>
                            <option value="EXPD">Premiere D</option>
                            <option value="EXTC">Terminale C</option>
                            <option value="EXTD">Terminale D</option>
                        </optgroup>
                    </select>
                    <label>Optgroups</label>
                </div>
                
                <div class="file-field input-field col s6">
                    <div class="btn">
                        <span>File</span>
                        <input type="file" onChange={(e)=>handleFile(e)} />
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Add
