import React from 'react';
import './App.css';
import Card from './Card';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <h1 className="page__heading">Top 7 Netflix Series in Bangladesh</h1>
      
      {
        Data.map((val, index) => {
          return (
            < Card
              key = {index}
              img_src={val.img_src}
              img_alt={val.img_alt}
              card_category="A netflix Original Series"
              card_title={val.card_title}
              link={val.link} />
          )
        })
      }
      
    </div>
  );
}

export default App;
