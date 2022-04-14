import './App.css'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Die from './components/Die'
import Confetti from './components/Confetti'

function App() {
  // function generate a die with a random number between 1 and 6
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  // function allNewDice generates an array of 10 dice
  const allNewDice = () => {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  // function rollDice
  // 1. roll those dice which are not isHeld
  // 2. if all dice are held then reset all dice
  const rollDice = () => {
    if (endGame) {
      setDice(allNewDice())
      setEndGame(false)
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => (die.isHeld ? die : generateNewDie()))
      )
    }
  }

  // function holdDice takes 'id' of die and toggles isHeld value
  const holdDice = (id) => {
    setDice(
      dice.map((die) => {
        // use ternary operator
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  // a state to hold the new Dice array
  const [dice, setDice] = useState(allNewDice)

  // a state to check endgame
  const [endGame, setEndGame] = useState(false)

  // useEffect to checkWin
  // checks if all dice are held and all dice are the same value
  useEffect(() => {
    let firstValue = dice[0].value
    let allSame = dice.every((die) => die.value === firstValue)
    let allHeld = dice.every((die) => die.isHeld)
    if (allSame && allHeld) {
      setEndGame(true)
    }
  }, [dice])

  // Map over the state numbers array to generate the array of Die components
  const diceElements = dice.map((die) => (
    <Die key={die.id} {...die} toggleHold={() => holdDice(die.id)} />
  ))

  return (
    <div>
      {endGame && <Confetti />}
      <main className="main-container">
        <div className="container-inner">
          <p className="title">Tenzies</p>
          <p className="description">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between roles.
          </p>
          <div className="die-container">{diceElements}</div>
          <button className="roll-btn" onClick={rollDice}>
            {endGame ? 'New Game' : 'Roll'}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
