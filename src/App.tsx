import { useState } from 'react';
import Button from './components/Button';
import Choice from './components/Choice';
import Pedra from './assets/icons/pedra';
import Papel from './assets/icons/papel';
import Tesoura from './assets/icons/tesoura';

import './App.css';

function App() {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [machineChoice, setMachineChoice] = useState<string | null>(null);
  const [victories, setVictories] = useState(0);
  const [loses, setLoses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handlePlay = () => {
    if (!selectedChoice) return;

    const randomChoice = Math.floor(Math.random() * 3) + 1;
    const choices = ['Pedra', 'Papel', 'Tesoura'];
    const machineSelected = choices[randomChoice - 1];
    setMachineChoice(machineSelected);

    
    if (
      (selectedChoice === 'Pedra' && machineSelected === 'Tesoura') ||
      (selectedChoice === 'Papel' && machineSelected === 'Pedra') ||
      (selectedChoice === 'Tesoura' && machineSelected === 'Papel')
    ) {
      setVictories(victories + 1);
      setResult('Jogador Venceu');
    } else if (selectedChoice === machineSelected) {
      setResult('Empate');
      setDraws(draws + 1);
    } else {
      setResult('Máquina Venceu');
      setLoses(loses + 1);
    }
  };

  const handlePlayAgain = () => {
    setSelectedChoice(null);
    setMachineChoice(null);
    setResult(null);
  };

  const handleGameOver = () => {
    setGameOver(true);
  }

  const handleRestart = () => {
    setVictories(0);
    setLoses(0);
    setDraws(0);
    setResult(null);
    setSelectedChoice(null);
    setMachineChoice(null);
    setGameOver(false);
  }


  

  return (
    <div className='container'>
      <div className="placar">
        Vitórias: <span id="vitorias">{victories}</span>
      </div>

      <label className="text">JOGO</label>

      <div className="jogo">
        <section className="escolha">
          <nav className='opcoes'>
            <Choice 
              choice='Pedra' 
              selected={selectedChoice === 'Pedra'} 
              onSelect={handleChoice} 
            />
            <Choice 
              choice='Papel' 
              selected={selectedChoice === 'Papel'} 
              onSelect={handleChoice} 
            />
            <Choice 
              choice='Tesoura' 
              selected={selectedChoice === 'Tesoura'} 
              onSelect={handleChoice} 
            />
          </nav>
          <Button color='verde' label='Escolher' onClick={handlePlay} />
        </section>

        <section className='escolha-2'>
          <div className="com">
            {machineChoice ? (
              <>
                {machineChoice === 'Pedra' && <Pedra id='icon' />}
                {machineChoice === 'Papel' && <Papel id='icon' />}
                {machineChoice === 'Tesoura' && <Tesoura id='icon' />}
              </>
            ) : (
              <svg id='interrogacao' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
              </svg>
            )}
          </div>
          <div className="com-text">
            {machineChoice ? `A Máquina escolheu ${machineChoice}` : 'A máquina vai escolher...'}
          </div>
        </section>
      </div>

      
      {result && (
        <div className="resultado">
          <div className="caixa">
            {result === 'Empate' && <div className="resultado-texto" id='texto-amarelo'>{result}!</div>}
            {result === 'Jogador Venceu' && <div className="resultado-texto" id='texto-verde'>{result}!</div>}
            {result === 'Máquina Venceu' && <div className="resultado-texto" id='texto-vermelho'>{result}!</div>}
            <Button color='azul' label='Jogar Novamente' onClick={handlePlayAgain} />
            <Button color='rosa' label='Finalizar Jogo' onClick={handleGameOver}/>
          </div>  
        </div>
      )}

      {gameOver === true && (
        <div className="game-over">
          <div className="caixa">
            <div className="resultado-texto" id='texto-vermelho'>Game Over!</div>
            <div className="resultados">
              <p>Vitórias: {victories}</p>
              <p>Derrotas: {loses}</p>
              <p>Empates: {draws}</p>
            </div>
            <Button color='azul' label='Jogar Novamente' onClick={handleRestart} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
