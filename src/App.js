import React from 'react';
import restaurants from 'data/restaurants.json';
import CardUi from 'components/CardUi';
import NavBar from 'components/Navbar';
import 'styles/App.scss';

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