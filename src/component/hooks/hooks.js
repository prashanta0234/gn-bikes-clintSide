import { Alert } from "@mui/material";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../Firebase/FIrebase.initialize";
const axios = require("axios").default;

initialize();

const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isloding, setisLoding] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://stark-gorge-80580.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data?.admin));
  }, [user?.email]);

  const userName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const registation = (email, password, name, location, history) => {
    setisLoding(true);
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        result.user.displayName = name;
        const destination = location?.state?.from || "/";
        history.replace(destination);
        userName(name);
        setUser(result.user);
        console.log(result.user);
        saveUser(email, password, name);
      })
      .catch((error) => {
        setError(error.messsage);
      })
      .finally(() => setisLoding(false));
  };

  const UserLogin = (email, password, location, history) => {
    setisLoding(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch(() => {
        setError(error?.messsage);
      })
      .finally(() => setisLoding(false));
  };
  const logOut = () => {
    setisLoding(true);
    signOut(auth).then(() => {
      setUser({});
    });
    setisLoding(false);
  };

  // observe user state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setisLoding(false);
    });
  }, []);

  const saveUser = (email, password, name) => {
    setisLoding(true);
    axios
      .post("https://stark-gorge-80580.herokuapp.com/users", {
        email: email,
        password: password,
        displayName: name,
      })
      .then(function (response) {
        <Alert>Registration SuccessFull!</Alert>;
        setisLoding(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    user,
    isloding,
    logOut,
    registation,
    UserLogin,
    isAdmin,
  };
};
export default useFirebase;
