import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import database from "./firebase";
import { serverResponse } from "./interfaces/DataInterfaces";
import firebase from "firebase/compat/app";

function App(): React.ReactElement {
  const [data, setData] = useState<serverResponse>();

  console.log(database);

  useEffect(() => {
    const database = firebase.database().ref("Items");

    const onDataChange = (snapshot: firebase.database.DataSnapshot) => {
      const data: serverResponse = snapshot.val();
      setData(data);
    };

    database.on("value", onDataChange);

    return () => {
      database.off("value", onDataChange);
    };
  }, []);
  console.log(data);

  if (!data) {
    return <div>Ждем!</div>;
  }

  return (
    <div>
        <Card data={data} />
    </div>
  );
}

export default App;
