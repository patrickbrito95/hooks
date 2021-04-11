import React, { useState } from 'react'
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindu',
        value: 'hi'
    },
]

const Translate = () => {
    // Toda lógica feita do dropdown das cores foi reaproveitada com a diferença das props: language e setLanguage
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')

    return(
        <>
        <div className="ui form">
        <div className="field">
        <Dropdown label={`Escolha uma linguagem abaixo`} selected={language} onSelectedChange={setLanguage} options={options} />
        <label>Digite o texto: </label>
        <input className="input" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
        </>
    )
}

export default Translate;