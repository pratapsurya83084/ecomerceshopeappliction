// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
  
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID


apiKey: " AIzaSyCFTH7zfYs0g6RyvGQtzBQHGVyX1H2sfCM",
  
  authDomain: "shopcart-96c5c.firebaseapp.com",
  projectId: "shopcart-96c5c",
  storageBucket:"shopcart-96c5c.appspot.com",
  messagingSenderId:"1014565997455",
  appId:"1:1014565997455:web:1279b468f5890e346859fa"       

}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default  app;