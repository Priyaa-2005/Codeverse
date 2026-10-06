import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Connecting to CodeVerse...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setMessage("Could not connect to CodeVerse backend.");
      });
  }, []);

  return (
    <div>
      <h1>CodeVerse</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;