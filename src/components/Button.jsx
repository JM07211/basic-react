import React from 'react'

const Button = ({text, type, onButtonClick }) => {
  //로직
  const handleclick = () => {
    onButtonClick(type);
  };

  //view
  return (
    <div className="button-area">
        <button type="button" onClick={handleclick}>
            {text}
        </button>
    </div>
  );
};

export default Button;
