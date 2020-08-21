import { decorate, observable } from 'mobx'

class AvailableDevicesStore {
  constructor() {
    const enumeratorPromise = navigator.mediaDevices.enumerateDevices()
    enumeratorPromise.then(availableDevices => {
      console.log('finid', availableDevices)
      this.devices = this.devices.concat(availableDevices)

      // devices.push()
    })
  }
  devices = []
}

decorate(AvailableDevicesStore, {
  devices: observable
})

export default AvailableDevicesStore
