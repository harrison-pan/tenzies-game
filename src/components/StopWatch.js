import moment from 'moment'
import { useState, useEffect } from 'react'

function StopWatch(props) {
  // const [gameStartTime, setGameStartTime] = useState(moment())
  const [diff, setDiff] = useState('00:00:00')
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
    }
  }, [props.startTimer, stopwatchTimer])

  return (
    <p className="roll-timer">
      Game time: {props.resetTimer ? '00:00:00' : diff}
    </p>
  )
}

export { StopWatch }
