import React from "react";

import './optionCard.scss';

type OptionCardProps = {
  subHeader: string;
  text?: string;
  href: string
}


const OptionCard:React.FunctionComponent<OptionCardProps> = ({subHeader, text, href}) => {
  return (
    <a href={href} className='option-card'>
      <h2 className='option-card__subheader'>
        {subHeader}
      </h2>
      <h3 className='option-card__text'>
        {text}
      </h3>
    </a>
  );
}

export default OptionCard;
