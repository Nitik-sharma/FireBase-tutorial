import "./App.css";
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { app } from "./Firebase/FireStore";
const firestore = getFirestore(app);
function App() {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Bhiwani",
      pin: "127031",
      lan: 20,
      long: 340,
    });
    console.log(result);
  };
  const writeSubData = async () => {
    const result = await addDoc(
      collection(firestore, "cities/Qha2lbgJzYPsamu5ivFy/places"),
      {
        name: "Collage Govt. Park",
        about: "Very beautiful park",
        date: Date.now(),
      }
    );
    console.log("result1-->", result);
  };

  const readData = async () => {
    const ref = doc(firestore, "users", "9DwhSwygF9QO5lb83Ga6");
    const result = await getDoc(ref);
    console.log("Data-->", result.data());
  };
  const getQueryData = async () => {
    const ref = collection(firestore, "users");
    const q = query(ref, where("isMale", "==", true));
    const snapShot = await getDocs(q);
    snapShot.forEach((data) => console.log("Data by Query-->", data.data()));
  };
  return (
    <div className="App">
      <h1>Fireebase </h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={writeSubData}>Put Sub Data </button>
      <button onClick={readData}>Get Data</button>
      <button onClick={getQueryData}>Get Data By Query</button>
    </div>
  );
}

export default App;
