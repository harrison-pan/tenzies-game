import { useWindowSize } from '@react-hook/window-size'
import ConfettiCanvas from 'react-confetti'

const Confetti = () => {
  const [width, height] = useWindowSize()
  return <ConfettiCanvas width={width} height={height} />
}

export default Confetti
