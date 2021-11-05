import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character.js";
import styled from 'styled-components';

const Header = styled.h1`
border = 3px solid black;
padding: 1.5rem;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect( () => {
    axios
    .get("https://swapi.dev/api/people")
    .then(res => {
      console.log(res.data);
      setCharacters(res.data);
                 
    })
    .catch(err => {
      console.error(err);
    })
  },[]);

  return (
    <div className="App">
      <Header className="Header">STAR WARS MAJOR CHARACTERS</Header>
      <Character characters={characters}/>      
    </div>
  );
}

export default App;
