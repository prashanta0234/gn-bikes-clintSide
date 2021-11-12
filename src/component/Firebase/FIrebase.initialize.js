import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initialize = () => {
  initializeApp(firebaseConfig);
};
export default initialize;
