import { nanoid } from 'nanoid'

export default function Die(props) {
  // use inline class
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : '#e7e7e7',
  }

  const dotElement = <span className="dot"></span>
  const oneDotElement = <div className="column">{[dotElement]}</div>
  const twoDotsElement = (
    <div className="column">{[dotElement, dotElement]}</div>
  )
  const threeDotsElement = (
    <div className="column">{[dotElement, dotElement, dotElement]}</div>
  )

  const getDiceElements = () => {
    switch (props.value) {
      case 1:
        return dotElement
      case 2:
        return [dotElement, dotElement]
      case 3:
        return [dotElement, dotElement, dotElement]
      case 4:
        return [twoDotsElement, twoDotsElement]
      case 5:
        return [twoDotsElement, oneDotElement, twoDotsElement]
      case 6:
        return [threeDotsElement, threeDotsElement]
      default:
        break
    }
  }

  return (
    <div
      className={`dice face-${props.value}`}
      style={styles}
      onClick={props.toggleHold}
    >
      {getDiceElements()}
    </div>
  )
}
