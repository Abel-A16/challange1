import React from "react"
import Card from "./components/Card";
import Navbar from './components/Navbar';
import './style.css';
import data from "./data";
import Hero from "./components/Hero";
console.log(data)

function App() {
  const cards = data.map(item =>{
    return(
      <Card
          key={item.Id}
          item = {item}
        />
    )
  })
  return (
    <div >
      <Navbar/>
      <Hero/>
      <section className="flex">
        {cards}
      </section>
    </div>
  );
}

export default App;
