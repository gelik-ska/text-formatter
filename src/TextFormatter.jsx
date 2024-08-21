import React, { useState } from 'react';
import './TextFormatter.css';

function TextFormatter() {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSubmit = () => {
    if (inputText.trim()) {
      setFormattedText(inputText.toUpperCase());
      setInputText('');
    }
  };

  return (
    <div className="text-formatter">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст"
        className="text-input"
      />
      <button onClick={handleSubmit} className="format-button">
        Форматировать
      </button>
      {formattedText && <p className="formatted-text">{formattedText}</p>}
    </div>
  );
}

export default TextFormatter;