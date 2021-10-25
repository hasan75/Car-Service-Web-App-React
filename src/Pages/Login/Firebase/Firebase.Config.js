console.log(process.env)
const firebaseConfig = {
apiKey: process.env.REACT_APP__FIREBASE_API_KEY,
authDomain: process.env.REACT_APP__FIREBASE_AUTH_DOMAIN,
projectId: process.env.REACT_APP__FIREBASE_PROJECT_ID,
storageBucket: process.env.REACT_APP__FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP__FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP__FIREBASE_APP_ID,
  };

export default firebaseConfig;