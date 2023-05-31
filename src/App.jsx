import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function App() {

 
  return (
    <Router>
    <div className="app">
      <Navbar/>
      <div className="container">
      <div className="centered-content">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/pricing" element = {<Pricing/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
      </div>
      </div>
    </div>
    </Router>
  )
}

export default App
