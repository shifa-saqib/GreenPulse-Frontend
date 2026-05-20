import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { initializeAuth, getAuth, Auth } from "firebase/auth";
// @ts-ignore: TS resolves DOM typings instead of React Native typings for this export
import { getReactNativePersistence } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { createAsyncStorage } from '@react-native-async-storage/async-storage';

const appStorage = createAsyncStorage("app");

const firebaseConfig = {
  apiKey: "AIzaSyCbu8RtuhTxuOwkr5bd-5g50i5JTUFCyiE",
  authDomain: "greenpulse-dev-63b4b.firebaseapp.com",
  projectId: "greenpulse-dev-63b4b",
  storageBucket: "greenpulse-dev-63b4b.firebasestorage.app",
  messagingSenderId: "936940947576",
  appId: "1:936940947576:web:cf0e74fe75571b26e9458d"
};

// Initialize Firebase safely to avoid "already-initialized" errors during Fast Refresh
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

let auth: Auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(appStorage)
  });
} catch (error: any) {
  if (error.code === 'auth/already-initialized') {
    auth = getAuth(app);
  } else {
    throw error;
  }
}

export { auth };
export const db: Firestore = getFirestore(app);
