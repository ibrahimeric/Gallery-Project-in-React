// Importa solo la función necesaria desde Firebase
import { initializeApp } from 'firebase/app';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBop18hk3Z5dguQ4c7_o61QYK7_scZrajU",
  authDomain: "galeryapp-89f8b.firebaseapp.com",
  projectId: "galeryapp-89f8b",
  storageBucket: "galeryapp-89f8b.appspot.com",
  messagingSenderId: "298614001159",
  appId: "1:298614001159:web:0f3614c3185a360ae764a2",
  measurementId: "G-PBQ7GY15X3"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

export default app;

