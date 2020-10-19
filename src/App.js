import React from 'react';
import './App.css';
import Card from './Card';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <h1 className="page__heading">Top 7 Netflix Series in Bangladesh</h1>

      <Card
        img_src={Data[0].img_src}
        img_alt={Data[0].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[0].card_title}
        link={Data[0].link} />

      <Card
        img_src={Data[1].img_src}
        img_alt={Data[1].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[1].card_title}
        link={Data[1].link} />

      <Card
        img_src={Data[2].img_src}
        img_alt={Data[2].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[2].card_title}
        link={Data[2].link} />

      <Card
        img_src={Data[3].img_src}
        img_alt={Data[3].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[3].card_title}
        link={Data[3].link} />

      <Card
        img_src={Data[4].img_src}
        img_alt={Data[4].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[4].card_title}
        link={Data[4].link} />

      <Card
        img_src={Data[5].img_src}
        img_alt={Data[5].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[5].card_title}
        link={Data[5].link} />

      <Card
        img_src={Data[6].img_src}
        img_alt={Data[6].img_alt}
        card_category="A netflix Original Series"
        card_title={Data[6].card_title}
        link={Data[6].link} />
    </div>
  );
}

export default App;
