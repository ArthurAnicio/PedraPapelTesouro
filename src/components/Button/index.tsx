import './styles.css';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ color, label, ...rest }) => {
  return (
    <button className='button' id={color} {...rest}>
      {label}
    </button>
  );
};

export default Button;
