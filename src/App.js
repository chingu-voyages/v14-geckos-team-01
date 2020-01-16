import React, { useState, useEffect } from 'react';
import CardUi from 'components/CardUi';
import NavBar from 'components/Navbar';
import 'styles/App.scss';
import 'styles/loading-spinner.scss';
import { loadRestaurantData } from 'App.utils';


const App = () => {
  const [dataRequest, setDataRequest] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    loadRestaurantData({ setDataRequest });
  }, []);

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

  const cardCycle = ShuffleArr(deepCopy(dataRequest.data));

  return (
    <>
      {dataRequest.isLoading && <div className="loading-spinner" alt="Loading..." />}
      {!dataRequest.isLoading && (
        <>
          <NavBar />
          <CardUi list={cardCycle} />
        </>
      )}
    </>
  );
};

export default App;
