import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAmqg3EMIp_NzY1V_76Zp_rKQBPR2QxQ0o",
  authDomain: "auth-estudo.firebaseapp.com",
  projectId: "auth-estudo",
  storageBucket: "auth-estudo.appspot.com",
  messagingSenderId: "115892303658",
  appId: "1:115892303658:web:9617e132e3c2eadfa59053",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
