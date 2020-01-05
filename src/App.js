import React from 'react';
import CardUi from './components/CardUi';
import NavBar from './components/Navbar';
import './styles/App.scss';
import restaurants from './data/restaurants.json';

function deepCopy(data) {
  return JSON.parse(JSON.stringify(data));
}

function ShuffleArr(input) {
  for (let i = input.length - 1; i >= 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}

const cardCycle = ShuffleArr(deepCopy(restaurants));

function App() {
  return (
    <>
      <NavBar />
      <CardUi list={cardCycle} />
    </>
  );
}

export default App;
