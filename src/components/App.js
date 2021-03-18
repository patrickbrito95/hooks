import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "O que é React?",
    content: "React é uma biblioteca de Javascript para Front-End",
  },
  {
    title: "Porque usar React?",
    content: "React é a biblioteca favorita entre os desenvolvedores",
  },
  {
    title: "Como você deve usar React",
    content: "Você pode usar React para criar componentes",
  },
];

// Estamos chamando o Array de objetos 'items' dentro do componente 'Accordion' como props.
const App = () => {
  return (
    <div className="ui container">
      <h1>Widgets</h1>
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
