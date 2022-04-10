import "./App.css";
import { Footer, Navbar } from "./frontend/components";
import { Router } from "./frontend/router/router";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
