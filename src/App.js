import React, {useState} from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import {CHOICES, getRoundOutcome} from './untils'
import ChoiceButton from './components/ChoiceButton';





function App() {
  const [startApp, setStartApp] = useState()
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    console.log(result,compChoice)

    const newUSerChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
  
    setPLayerChoice(newUSerChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }
  
  gameHistory.push(result)
  setGamePrompt(result);
  setGameHistory(gameHistory);
  }

  const [gameHistory, setGameHistory] = useState([]);
  

  const [playerChoice, setPLayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [previousWinner, setPreviousWinner] = useState(null);



  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard 
              title="Computer" 
              previousWinner={previousWinner}
              imgURL={computerChoice && computerChoice.url}
            />
            <h1>{prompt}</h1>
            <button>Start</button>
            <ChoiceButton onPlayerChoose={onPlayerChoose}/>
            <ChoiceCard 
              title="You"
              previousWinner={previousWinner}
              imgURL={playerChoice && playerChoice.url} 
            />
          </div>

          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <ul>
              {gameHistory.map(result => {
              return <li>{result}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
