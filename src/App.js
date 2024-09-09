import React from 'react';
import './style.css';

const elmts = [  
  {name: "Combinaison spatiale",importance: 9}, 
  {name:"Casque à feuille d’or", importance:0},
  {name:"Photo de Tam", importance:6}];

function Item({ name, importance }) {
  return (
    <li className="item">
      {name} {importance > 0 && <span>(importance: {importance})</span>  }
    </li>
  );
}

export default function PackingList(props) {
  return (
    <section>
      <h1>Liste d’affaires de Sally Ride</h1>
      <ul>
        {props.elements
        .sort((a, b) => a.importance - b.importance)
        .map((elmt) => (       
        <Item
          importance={elmt.importance}
          name={elmt.name}
        />))}
      </ul>
    </section>
  );
}


export default function App() {
  return <PackingList elements={elmts}/>;
}
