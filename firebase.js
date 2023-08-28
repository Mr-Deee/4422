import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

    apiKey: "AIzaSyB5Md--nifz7GrG327RcrAdT5p7MVBB10E",
  
    authDomain: "personaldb-e8c15.firebaseapp.com",
  
    projectId: "personaldb-e8c15",
  
    storageBucket: "personaldb-e8c15.appspot.com",
  
    messagingSenderId: "628142769312",
  
    appId: "1:628142769312:web:26ceb2f4c0c68d954635c5",
  
    measurementId: "G-RDT2C3WWWN"
  
  };
  
// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
  
let app;
if(firebaseConfig.apps.lenght===0){
    app= firebase.initializeApp(firebaseConfig)
}else{
    app=firebase.app()
}
const auth =firebase.auth()

export {auth};