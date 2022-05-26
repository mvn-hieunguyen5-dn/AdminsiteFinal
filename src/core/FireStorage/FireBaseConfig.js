import { initializeApp } from 'firebase/app';
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBeAkV8xkkcPFh-pP43BJMGmLbqCrwdbGc",
  authDomain: "storgeimg.firebaseapp.com",
  projectId: "storgeimg",
  storageBucket: "storgeimg.appspot.com",
  messagingSenderId: "225756629090",
  appId: "1:225756629090:web:0085a52b0fd2a92b74693b"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;