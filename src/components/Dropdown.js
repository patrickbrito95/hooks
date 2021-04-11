import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

// Esse useEffect abaixo foi criado para quando clicarmos em qualquer lugar da tela, o dropdown recolher.
// Esse método é chamado de Event Bubbling
  useEffect(() => {
    const onBodyClick = (event) => {
      if(ref.current.contains(event.target)){
        return;
      }
      setOpen(false)
    };
    document.body.addEventListener("click", onBodyClick, {
      capture: true});

      return () => {
        document.body.removeEventListener("click", onBodyClick, {
          capture: true,
        });
      };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    // UseRef usado nessa div para referenciar qual div foi clicada
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>

        {/* LÓGICA IMPOSTA PARA CRIAR UM TOGGLE DE ABRIR E FECHAR O DROPDOWN ATRAVÉS DO USESTATE E TERNÁRIO MANUPULANDO CSS */}
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : null}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : null}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
