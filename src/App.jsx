// import logo from "./logo.svg";
import "./App.css";
// import "dotenv/config";

function App() {
  // console.log(process.env);
  const secret = process.env.REACT_APP_SECRET;

  console.log(secret);
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>secret env: {secret ? secret : "secret not found"}</h2>
    </div>
  );
}

export default App;
