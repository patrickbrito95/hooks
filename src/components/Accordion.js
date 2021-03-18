import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  //   Primeiro inicializamos nosso State com algum valor
  // Depois criamos uma função para atribuir nosso setState
  // E por último, passamos nosso valor inicial como 'this.state'
  const [show, setShow] = useState("hellow");

  //   Utilizamos 'idx' como parâmetro para identificarmos qual index nós estamos clicando, para torna-lo único no momento do click.
  const onClickContent = (index) => {
    setShow(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === show ? "active" : "";

    return (
      <Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onClickContent(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
