import { Observable } from 'rxjs'
import { useObservable, useObservableState } from 'observable-hooks'

const useAvailableDevicesStore = () => {
  const observable = useObservable(
    () =>
      new Observable(subscriber => {
        console.log('sdfsdf')
        const enumeratorPromise = navigator.mediaDevices.enumerateDevices()
        enumeratorPromise.then(availableDevices => {
          const audioDevices = availableDevices.filter(
            device => device.kind == 'audioinput'
          )

          subscriber.next(audioDevices)
          console.log('what?? ', audioDevices)
        })

        return () => {
          console.log('destroning')
        }
      })
  )

  return useObservableState(observable)
}

export default useAvailableDevicesStore
