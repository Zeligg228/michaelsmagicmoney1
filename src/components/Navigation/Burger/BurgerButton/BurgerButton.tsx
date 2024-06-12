import React from "react";

import './BurgerButton.scss';

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void
}

const BurgerButton: React.FunctionComponent<BurgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`burger-btn ${isOpen ? 'open' : ''}`}
    >
      <div className='burger-btn__element'/>
      <div className='burger-btn__element'/>
      <div className='burger-btn__element'/>
    </button>
  );
};

export default BurgerButton;
