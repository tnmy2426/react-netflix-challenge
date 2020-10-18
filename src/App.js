import React from 'react';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card img_src="#" img_alt="DarkPic" card_category="A netflix Original Film" card_title="DARK" link="https://www.google.com" />
      <Card img_src="#" img_alt="TheFlash" card_category="A netflix Original Series" card_title="FLASH" link="https://www.facebook.com" />
    </div>
  );
}

export default App;
