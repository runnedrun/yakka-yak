import React from 'react'
import AudioDevicePicker from './AudioDevicePicker'
import { StoreProvider } from './StoreProvider'

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <AudioDevicePicker />
      </div>
    </StoreProvider>
  )
}

export default App
