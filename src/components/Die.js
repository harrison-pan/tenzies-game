import { nanoid } from 'nanoid'
import Dot from './Dot'
import MultiDotsCombo from './MultiDotsCombo'

export default function Die(props) {
  // use inline class
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : '#e7e7e7',
  }

  const getDiceElements = (numOfDots) => {
    let dotsArray = []
    if (numOfDots <= 3) {
      for (let index = 0; index < numOfDots; index++) {
        let key = nanoid()
        dotsArray.push(<Dot key={key} />)
      }
    } else if (numOfDots === 4 || numOfDots === 6) {
      for (let index = 0; index < 2; index++) {
        let key = nanoid()
        dotsArray.push(<MultiDotsCombo key={key} dots={numOfDots / 2} />)
      }
    } else if (numOfDots === 5) {
      dotsArray.push(<MultiDotsCombo key={nanoid()} dots={2} />)
      dotsArray.push(<MultiDotsCombo key={nanoid()} dots={1} />)
      dotsArray.push(<MultiDotsCombo key={nanoid()} dots={2} />)
    }

    return dotsArray
  }

  return (
    <div
      className={`dice face-${props.value}`}
      style={styles}
      onClick={props.toggleHold}
    >
      {getDiceElements(props.value)}
    </div>
  )
}
