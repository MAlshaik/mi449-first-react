// App.js
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import WordDisplay from './WordDisplay';
import words from './words';
import Button from './Button';

function App() {
  const [currentWord, setCurrentWord] = useState('');

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
  };

  return (
    <div className="App">
      <Header />
      <WordDisplay currentWord={currentWord} />
      <Button onClick={getRandomWord}>Get New Word</Button>
    </div>
  );
}

export default App;

