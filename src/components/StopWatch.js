import moment from 'moment'
import { useState, useEffect } from 'react'

function StopWatch(props) {
  const initTime = '00:00:00'
  const [diff, setDiff] = useState(initTime)
  const [bestTime, setBestTime] = useState(
    () => localStorage.getItem('bestScore') || initTime
  )
  const [stopwatchTimer, setStopwatchTimer] = useState(() => {
    let timer = null
    return {
      start: () => {
        const gameStartTime = moment()
        timer = setInterval(() => {
          let start = moment(gameStartTime)
          let end = moment()
          let diff = end.diff(start)
          setDiff(moment.utc(diff).format('mm:ss.SS'))
        }, 0)
      },
      stop: () => {
        clearInterval(timer)
      },
    }
  })

  useEffect(() => {
    if (props.startTimer) {
      stopwatchTimer.start(moment())
    } else {
      stopwatchTimer.stop()
      getBestScore()
    }
  }, [props.startTimer, stopwatchTimer])

  useEffect(() => {
    localStorage.setItem('bestScore', bestTime)
  }, [bestTime])

  function getBestScore() {
    if (bestTime === initTime) {
      setBestTime(diff)
    } else {
      const newBestArr = diff.split(':')
      const prevBestArr = bestTime.split(':')
      for (let index = 0; index < newBestArr.length; index++) {
        let newBest = parseInt(newBestArr[index])
        let prevBest = parseInt(prevBestArr[index])
        if (newBest < prevBest) {
          setBestTime(diff)
          break
        } else if (newBest === prevBest) {
          continue
        } else {
          break
        }
      }
    }
  }

  return <p className="roll-timer">Game time: {diff}</p>
}

export { StopWatch }
