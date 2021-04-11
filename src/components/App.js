import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from './Translate'

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

const options = [
  {
    label: "The Color is Red",
    value: "red",
  },
  {
    label: "The Color is Green",
    value: "green",
  },
  {
    label: "The Color is Blue",
    value: "blue",
  },
  {
    label: "The Color is Orange",
    value: "orange",
  },
];

// Estamos chamando o Array de objetos 'items' dentro do componente 'Accordion' como props.
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="ui container">
      <h1>Widgets</h1>
      <Accordion items={items} />
      <Search />
      <button class="ui button" onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>
      { showDropdown ? <Dropdown
        label={`Escolha uma cor: `}
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null
      }
      <Translate />
    </div>
  );
};

export default App;
