import React from "react";
import Navbar from './components/navbar/Navbar';
import './App.css'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import {action,originals} from './urls'

function App() {
  return (
    <div className="App">
<Navbar/>
<Banner/>
<Rowpost url={originals} title='Netflix Originals' />
<Rowpost url={action} title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
