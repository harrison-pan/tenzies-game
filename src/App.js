import './App.css'
import Die from './Die'

function App() {
  return (
    <main className="main-container">
      <div className="container-inner">
        <p className="title">Tenzies</p>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between roles.
        </p>
        <div className="die-container">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </div>
      </div>
    </main>
  )
}

export default App
