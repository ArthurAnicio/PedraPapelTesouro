import './styles.css';
import React from 'react';

import Tesoura from '../../assets/icons/tesoura';
import Pedra from '../../assets/icons/pedra';
import Papel from '../../assets/icons/papel';

interface ChoiceProps {
  choice: string;
  selected: boolean;
  onSelect: (choice: string) => void;
}

const Choice: React.FC<ChoiceProps> = ({ choice, selected, onSelect }) => {
  const borderStyle = selected ? '10px solid var(--azul)' : 'none';

  return (
    <button
      className='choice'
      style={{ border: borderStyle}}
      onClick={() => onSelect(choice)}
    >
      {choice === 'Pedra' && <Pedra id='icon' />}
      {choice === 'Papel' && <Papel id='icon' />}
      {choice === 'Tesoura' && <Tesoura id='icon' />}
    </button>
  );
};

export default Choice;
