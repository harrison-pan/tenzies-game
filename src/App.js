import './App.css'
import { useState } from 'react'
import Die from './Die'

function App() {
  // function allNewDice generates an array of 10 with random num between 1-6 inclusive
  const allNewDice = () => {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDice
  }

  // a state to hold the new Dice array
  const [dice, setDice] = useState(allNewDice)

  // Map over the state numbers array to generate the array of Die components
  const diceElements = dice.map((value, index) => (
    <Die key={index} value={value} />
  ))

  return (
    <main className="main-container">
      <div className="container-inner">
        <p className="title">Tenzies</p>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between roles.
        </p>
        <div className="die-container">{diceElements}</div>
        <button className="roll-btn" onClick={() => setDice(allNewDice)}>
          Roll
        </button>
      </div>
    </main>
  )
}

export default App
