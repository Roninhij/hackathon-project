import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "firebase/compat/database"; // Ensure the database is imported

const url = "https://6666aa30a2f8516ff7a44b9d.mockapi.io/Events";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Events, setEvents] = useState([]);

  const [filteredEvents, setFilteredSetEvents] = useState([]);

  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = (userId) => {
    if (!user) return; // Ensure the user is authenticated
    const db = firebase.database();
    db.ref(`favorites/${userId}`)
      .once("value") // Use once instead of on to avoid memory leaks
      .then((snapshot) => {
        const favs = [];
        snapshot.forEach((childSnapshot) => {
          favs.push({
            id: childSnapshot.key,
            EventId: childSnapshot.val().EventId,
            ...childSnapshot.val(),
          });
        });
        setFavorites(favs);
      })
      .catch((error) => {
        console.error("Failed to fetch favorites:", error);
      });
  };
  useEffect(() => {
    setUser(firebase.auth().currentUser);
    if (user) {
      console.log("User is signed in:", user.email);
    } else {
      console.log("No user is signed in.");
    }

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  useEffect(() => {
    const dbRef = firebase.database().ref("Events");
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.entries(data || {}).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      setEvents(dataArray);
      setFilteredSetEvents(dataArray);
      getCategories();
    });

    // Cleanup function to disconnect listener when the component unmounts
    return () => dbRef.off("value");
  }, []);

  useEffect(() => {
    console.log(Events, 444);
    getCategories();
  }, [Events]);

  const filterCategories = (e) => {
    setFilteredSetEvents(Events);
    // Assuming 'Events' is defined elsewhere in your scope
    //  return Events;
    setFilteredSetEvents(
      Events.filter((item) => item.categoryName === e.target.textContent)
    );
    // Do something with 'filteredEvents', such as updating the UI or storing it
  };

  const handleAddEvent = async (Event) => {
    setLoading(true);
    try {
      const response = await axios.post(url, Event);
      toast.success("Successfully created!", {
        position: "top-center",
      });
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      // Provide feedback to the user that they have been signed out
      alert("Signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
      // Optionally, provide feedback to the user about the error
      alert("Failed to sign out. Please try again.");
    }
  };

  const handleUpdate = async (itemId, updatedValues) => {
    try {
      const dbRef = firebase.database().ref("Events");
      const itemRef = dbRef.child(itemId);

      await itemRef.update(updatedValues);
      console.log("Item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const dbRef = firebase.database().ref("Events");
      const itemRef = dbRef.child(itemId);

      await itemRef.remove();
      console.log("Item removed successfully");
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const addEvent = (Event) => {
    const newEvent = {
      id: createEventId(),
      ...Event,
    };
    handleAddEvent(newEvent);
  };

  const getCategories = () => {
    const result = {};
    Events.forEach((item) => {
      if (result[item.categoryName]) {
      } else {
        result[item.categoryName] = 1;
      }
    });
    console.log(Object.keys(result));
    setCategories(Object.keys(result));
  };
  return (
    <AppContext.Provider
      value={{
        error,
        loading,
        user,
        filteredEvents,
        handleGoogleSignIn,
        filterCategories,
        setFilteredSetEvents,
        handleSignOut,
        addEvent,
        handleAddEvent,
        handleUpdate,
        handleDelete,

        Events,
        categories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
