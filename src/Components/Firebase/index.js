import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

        const firebaseConfig = {
            apiKey: "AIzaSyCMX6Ft3d0T7pl26VvvfX6CyD4NgIKRc-E",
            authDomain: "aemn-emig.firebaseapp.com",
            projectId: "aemn-emig",
            storageBucket: "aemn-emig.appspot.com",
            messagingSenderId: "600173104514",
            appId: "1:600173104514:web:6daf6d647f6ac9da3ed39b",
            measurementId: "G-LYV0MSBTQV"
        };
        firebase.initializeApp(firebaseConfig)

        let db = firebase.firestore();
        let storage = firebase.storage();

export default firebase;
