import React from 'react';
import './Button.scss';
import clsx from 'clsx';

type ButtonProps = {
  variant?: "primary" | "secondary";
  text?: string
} & ({src: string; alt: string} | {src?: never; alt?: never})
const Button: React.FunctionComponent<ButtonProps> = ({src, alt, text, variant = "primary"}) => {
  return (
    <a href='/' className={clsx(variant === "primary" ? 'btn--game' : 'btn')}>
     {src &&  <img src={src} alt={alt}/>}
      <span className={clsx(variant === "secondary" && "btn__text btn__text--phone")}>{text}</span>
    </a>
  )
}

export default Button