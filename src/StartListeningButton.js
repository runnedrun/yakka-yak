import React from 'react'
import { useIsListening } from './isListeningStore'
import Button from '@material-ui/core/Button'

const StartListeningButton = () => {
  const [isListening, setIsListening] = useIsListening()
  return (
    <Button onClick={() => setIsListening(!isListening)}>
      {isListening ? 'Stop Listening' : 'Start Listening'}
    </Button>
  )
}

export default StartListeningButton
