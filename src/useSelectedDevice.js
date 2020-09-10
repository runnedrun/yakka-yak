import { BehaviorSubject } from 'rxjs'
// import { useObservableState, useSubscription } from 'observable-hooks'
import { useObservableState } from 'observable-hooks'

const selectedDeviceStore = new BehaviorSubject()

const useSelectedDevice = () => {
  return [
    useObservableState(selectedDeviceStore),
    _ => selectedDeviceStore.next(_)
  ]
}
// interval(2000).subscribe(state)
export { useSelectedDevice, selectedDeviceStore }
