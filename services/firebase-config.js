import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAzGYF_utpdoSiWw90hV9P-8p-rzbQ81qU",
    authDomain: "shopu-e80e1.firebaseapp.com",
    databaseURL: "https://shopu-e80e1.firebaseio.com",
    projectId: "shopu-e80e1",
    storageBucket: "shopu-e80e1.appspot.com",
    messagingSenderId: "585092098254"
  };

export default firebase.initializeApp(config);
