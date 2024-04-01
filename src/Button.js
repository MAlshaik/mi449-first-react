import React from 'react';
import './App.css';

export default function Button({ children, ...attributes }) {
  return (
    <button className="Button" type="button" {...attributes}>
      {children}
    </button>
  );
}

