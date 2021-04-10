import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  // Só podemos chamar uma função assíncrona dentro de um useEffect apenas se colocarmos outra função dentro dela.
  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      searchWiki();
    } else {
      // Aqui foi usado o setTimeout para limitar o número de requisições na API, a cada 0,5 segundo fará uma nova. Evitanto requisitar a cada dígito novo
      const timeoutId = setTimeout(() => {
        if (term) {
          searchWiki();
        }
      }, 500);
      // Fiz essa função 'clearInterval' para poder limpar o setTimeout anterior, quando é utilizado pelo return dentro do useEffect
      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* DANGEROUS SET INNER HTML SERVE PARA RENDERIZARMOS STRINGS PRONTAS VINDAS DA API COM FORMATO HTML */}
          {/* DEVEMOS TER CERTEZA SE O HTML FORNECIDO PELO SERVIDOR SEJA 100% CONFIÁVEL, POIS ISSO PODE TORNAR NOSSO CÓDIGO VULNERÁVEL */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
