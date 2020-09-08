import React from 'react'
import AudioDevicePicker from './AudioDevicePicker'
import StartListeningButton from './StartListeningButton'

function App() {
  return (
    <div className="App">
      <AudioDevicePicker />
      <StartListeningButton/>
    </div>
  )
}

export default App
