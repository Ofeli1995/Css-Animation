import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2U095XReEHiDVDB3sv_XPO6A67KyYooY",
  authDomain: "animation-63a23.firebaseapp.com",
  projectId: "animation-63a23",
  storageBucket: "animation-63a23.appspot.com",
  messagingSenderId: "744659851494",
  appId: "1:744659851494:web:a2cf1176ee8f22e00e8327",
  measurementId: "G-74KHQBXYWF",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
createApp(App).use(store).use(router).mount("#app");
