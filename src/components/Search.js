import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Digite o que gostaria de pesquisar:</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
