import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initilizeFirebaseApp } from "../Firebase/firebase.initilize";

initilizeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState();
  const auth = getAuth();

  // console.log(user.email);
  const registerUser = (email, password, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        setUser(newUser?.user);
        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInUser = (email, password, location, history) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential?.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let hi = true;

    fetch(
      `https://bid-autopia-server-makinahmed.vercel.app/users/isAdmin?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        const admin = data?.admin;
        setIsAdmin(admin);
      });

    return () => {
      hi = false;
    };
  }, [user?.email]);

  useEffect(() => {
    fetch(`https://bid-autopia-server-makinahmed.vercel.app/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setNewUser(data));
  }, [user.email]);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => localStorage.setItem("bid_autoPia", token));
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    signOutUser,
    signInUser,
    newUser,
    registerUser,
    user,
    loading,
    setLoading,
    isAdmin,
  };
};

export default useFirebase;
