import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "antd/dist/antd.css";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);
  // render first. At first Login will render. if _token exists then it goes to Home
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;
