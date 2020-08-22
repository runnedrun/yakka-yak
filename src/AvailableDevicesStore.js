class AvailableDevicesStore {
  constructor() {
    const enumeratorPromise = navigator.mediaDevices.enumerateDevices()
    enumeratorPromise.then(availableDevices => {
      const audioDevices = availableDevices.filter(
        device => device.kind == 'audioinput'
      )

      this.devices = this.devices.concat(audioDevices)

      console.log("d", devices)

      // devices.push()
    })
  }
  devices = []
}

export default AvailableDevicesStore
