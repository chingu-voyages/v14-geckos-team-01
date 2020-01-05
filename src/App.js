import React, { useState } from 'react';
import CardUi from './components/CardUi'
import NavBar from './components/Navbar';
import './styles/App.scss';
import restaurants from './data/restaurants.json';
import ButtonCycleWrapper from './components/ButtonCycleWrapper';

function App() {

  let [cardCycle, setCardCycle] = useState(ShuffleArr(deepCopy(restaurants)));

  const handleClick = (e) => {
    const value = e.target.id;
    if (value === 'skip') {
      setCardCycle(cardCycle.splice(1, cardCycle.length));
    }
    console.log(e.target.id);
  }

  return (
    <>
      <NavBar />
      <ButtonCycleWrapper handleClick={handleClick}>
        <CardUi list={cardCycle[0]} />
      </ButtonCycleWrapper>
    </>
  );
}

export default App;

function deepCopy(data) {
  return JSON.parse(JSON.stringify(data))
}

function ShuffleArr(input) {
  for (let i = input.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}