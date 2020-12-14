import React, { useState } from "react"
import './App.css';

export default function App() {
let [pokemon, setPokemon] = useState('Pikachu')
  return (
      <div>
      <input type="text" onChange={(e) => {
        setPokemon(e.target.value)
      }} />
      {pokemon}</div>
  );
}


