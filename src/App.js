import React, {useState} from 'react';
import CardUi from './components/CardUi';
import NavBar from './components/Navbar';
import BasketOverview from './components/BasketOverview';
import './styles/App.scss';
import restaurants from './data/restaurants.json';

const menu = [
  {
    id: 1,
    name: "spring roll",
    category: "appetizers",
    price: 4
  },
  {
    id: 2,
    name: "pizza",
    category: "main dishes",
    price: 10
  },
  {
    id: 3,
    name: "pasta",
    category: "main dishes",
    price: 12
  },
  {
    id: 4,
    name: "chocolate cake",
    category: "desserts",
    price: 6
  }
]

function deepCopy(data) {
  return JSON.parse(JSON.stringify(data));
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

const cardCycle = ShuffleArr(deepCopy(restaurants));

function App() {
  const [basketContents, setBasketContents] = useState([]);

  return (
    <>
      <button id="1" onClick={e => setBasketContents([e.target.id])}>spring roll</button>
      <button id="2" onClick={handleClick}>pizza</button>
      <button id="3" onClick={handleClick}>pasta</button>
      <button id="4" onClick={handleClick}>chocolate cake</button>
      <BasketOverview basketContents={basketContents} />
      <NavBar />
      <CardUi list={cardCycle} />
    </>
  );
}

function handleClick(e) {
  // for item in menu
  let item = menu.filter(item => item.id == e.target.id);
  alert(item.name);
  // return setBasketContents([e.target.id]);
  // How to display the contents of the basket - setBasketContents (i.e. add to the array)
}

export default App;

