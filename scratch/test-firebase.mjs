import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

const configWithAndroidAppId = {
  apiKey: "AIzaSyA5P6pLHl4PMdvGwFRai2OoT_W5uecyotw",
  projectId: "greenpulse-dev-63b4b",
  appId: "1:936940947576:android:7e236d22907b541fe9458d"
};

const configWithoutAppId = {
  apiKey: "AIzaSyA5P6pLHl4PMdvGwFRai2OoT_W5uecyotw",
  projectId: "greenpulse-dev-63b4b"
};

async function testAuth() {
  try {
    const app1 = initializeApp(configWithAndroidAppId, "app1");
    const auth1 = getAuth(app1);
    await signInAnonymously(auth1);
    console.log("SUCCESS WITH ANDROID APP ID");
  } catch(e) {
    console.error("FAILED WITH ANDROID APP ID:", e.message);
  }

  try {
    const app2 = initializeApp(configWithoutAppId, "app2");
    const auth2 = getAuth(app2);
    await signInAnonymously(auth2);
    console.log("SUCCESS WITHOUT APP ID");
  } catch(e) {
    console.error("FAILED WITHOUT APP ID:", e.message);
  }
}

testAuth();
