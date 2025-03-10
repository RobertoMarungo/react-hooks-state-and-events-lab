import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  const [darkMode, setDarkMode] = useState(false);
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? 'App dark' : 'App light';
  const darkModeText = darkMode ? 'Light Mode' : 'Dark Mode';

  function handleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{darkModeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
