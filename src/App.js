import React from 'react'
import AudioDevicePicker from './AudioDevicePicker'
import AvailableDevicesStore from "./AvailableDevicesStore"

function App() {
  const deviceStore = new AvailableDevicesStore()
  return (
    <div className="App">
      <AudioDevicePicker devices={deviceStore.devices} />
    </div>
  )
}

export default App
