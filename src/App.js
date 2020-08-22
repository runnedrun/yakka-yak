import React from 'react'
import AudioDevicePicker from './AudioDevicePicker'
import AvailableDevicesStore from './AvailableDevicesStore'
import { StoreProvider } from './useStore'

function App() {
  const deviceStore = new AvailableDevicesStore()
  return (
    <StoreProvider>
      <div className="App">
        <AudioDevicePicker deviceStore={deviceStore} />
      </div>
    </StoreProvider>
  )
}

export default App
