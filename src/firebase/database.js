import { initializeApp } from 'firebase/app';
import { app } from './config'
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, onValue, set, update, child, get, query, remove, startAfter, limitToFirst, limitToLast, orderByValue, startAt, orderByChild, endAt, endBefore } from "firebase/database";
import { getList, getIndexStorage } from './storage'
// import { getDate, getDayMonthYear, getMonthAndYear } from '../utils/Utils'


const auth = getAuth();
const db = getDatabase(app);

function onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG, setUserDate, setUserMonthAndYear, setUserDayMonthYear, monthAndYear) {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user)
    } else {
      setUserProfile(user)

      get(query(ref(db, 'login')))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let snap = snapshot.val()
            // setUserData(allData)
            allData = { ...allData, login: snap }
            setUserData(allData)
          }
        });
    }


  });
}

// ---------------------------Login, Sign Up and Sign In------------------------------------

function signInWithEmail(email, password, setUserProfile, setUserSuccess) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      setUserProfile(user)
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
}

function handleSignOut() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

// -------------------------------Firebase Realtime Database------------------------------------

const dbRef = ref(getDatabase());

let allData = {}


async function getIndexData(setUserData, date, minDate, setUserSuccess) {        

  get(query(ref(db, 'users')))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let snap = snapshot.val()
        // setUserData(allData)
        allData = { ...allData, users: snap }
      }

    });

}



function getSpecificData(rute, specificData, setUserSpecificData) {

  let key = rute.split('/').pop()
  get(child(dbRef, `${rute}`)).then((snapshot) => {
    if (snapshot.exists()) {
      let snap = snapshot.val()
      setUserSpecificData({ ...specificData, [key]: snap })
    } else {
      setUserSpecificData({ ...specificData, [key]: { nota: 'en redaccion' } })
    }
  }).catch((error) => {
    console.error(error);
  });
}

function writeUserData(ruteDB, object, setUserSuccess, detail) {
  console.log(object)
  update(ref(db, `${ruteDB}`), object)
    .then(() => {
      setUserSuccess !== null ? setUserSuccess('save') : ''
      // getIndexData(setUserData,)
    })
    .catch(() => '')
}

function removeData(ruteDB, setUserData, setUserSuccess) {
  remove(ref(db, ruteDB))
    .then(() => {
      getIndexData(setUserData)
      setUserSuccess('save')
    })
    .catch(() => setUserSuccess('repeat'));
}

export { onAuth, signInWithEmail, handleSignOut, getIndexData, getSpecificData, writeUserData, removeData, }

