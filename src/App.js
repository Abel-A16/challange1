import React from "react"
import Card from "./components/Card";
import Navbar from './components/Navbar';
import './style.css';

function App() {
  return (
    <div >
      <Navbar/>
      <div className="flex">
        <Card
          img="./zafres.jpeg"
          title="Life Lessons with Katie Zaferes"
          rating="5.0"
          reviewCount="(6)"
          price="$136"
          country="Ethiopia"
        />
        <Card
          img="./zafres.jpeg"
          title="Life Lessons with Katie Zaferes"
          rating="5.0"
          reviewCount="(6)"
          price="$136"
          country="Ethiopia"
        />
      </div>
    </div>
  );
}

export default App;
