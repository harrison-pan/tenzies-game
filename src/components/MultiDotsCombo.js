import { nanoid } from 'nanoid'
import Dot from './Dot'

export default function MultiDotsCombo(props) {
  let dotsCombo = []
  for (let index = 0; index < props.dots; index++) {
    let key = nanoid()
    dotsCombo.push(<Dot key={key} />)
  }
  return <div className="column">{dotsCombo}</div>
}
