import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@reach/accordion";
import "@reach/accordion/styles.css";
import "./index.css";

export default function App() {
  let [pokemon, setPokemon] = useState("jigglypuff")
  let [img, setImg] = useState(null);
  let [abilities, setAbilities] = useState([]);

  useEffect(() => {
    let isCurrent = true;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => res.json())
      .then(res => {
        if (isCurrent) {
          setImg(res.sprites.front_default);
          setAbilities(res.abilities);
        }
      })
      .catch(error => {
        // oops
      });
    return () => {
      isCurrent = false;
    };
  }, [pokemon]);

  return (
    <div className="App">
    <input type="text" onChange = {e => {
    	setPokemon(e.target.value.toLowerCase())
    } }
    	/>
      <h1>Stats for {pokemon}</h1>
      <Accordion>
        <AccordionItem>
          <h3>
            <AccordionButton>Sprite</AccordionButton>
          </h3>
          <AccordionPanel>
            <img src={img} alt="Sprite" />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h3>
            <AccordionButton>Abilities</AccordionButton>
          </h3>
          <AccordionPanel>
            {abilities.map(a => {
              return <div>{a?.ability?.name}</div>;
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}