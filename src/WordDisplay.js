import React from 'react';

function WordDisplay({ currentWord }) {
  const isSpecialWord = currentWord === 'React';

    return (
    <div>
      <h2> Current Word: {currentWord}</h2>
      {isSpecialWord && <p>This word is special!</p>}
    </div>
  );
  }

export default WordDisplay;

