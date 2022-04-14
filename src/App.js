import './App.css'
import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Die from './components/Die'
import Confetti from './components/Confetti'

function App() {
  // function allNewDice generates an array of 10 with random num between 1-6 inclusive
  const allNewDice = () => {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      const value = Math.floor(Math.random() * 6) + 1
      newDice.push({ id: nanoid(), value: value, isHeld: false })
    }
    return newDice
  }

  // function rollDice roll those dice which are not held
  const rollDice = () => {
    let newDice = [...dice]
    newDice.forEach((die) => {
      if (!die.isHeld) {
        die.value = Math.floor(Math.random() * 6) + 1
        die.id = nanoid()
      }
    })
    setDice(newDice)
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
    const checkWin = () => {
      let allSame = true
      let allHeld = true
      let firstValue = dice[0].value
      dice.forEach((die) => {
        if (die.value !== firstValue) {
          allSame = false
        }
        if (!die.isHeld) {
          allHeld = false
        }
      })
      return allSame && allHeld
    }
    setEndGame(checkWin)
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
            Roll
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
