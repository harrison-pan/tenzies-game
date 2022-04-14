export default function Die(props) {
  // use inline class
  // const styles = {
  //   backgroundColor: props.isHeld ? '#59E391' : 'white',
  // }
  // <div className="die-face" style={styles}>
  return (
    <div
      className={props.isHeld ? 'die-face held' : 'die-face'}
      onClick={props.toggleHold}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  )
}
