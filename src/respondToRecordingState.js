import { isListeningStore } from './isListeningStore'
import { selectedDeviceStore } from './useSelectedDevice'
import { combineLatest } from 'rxjs'
import { tap } from 'rxjs/operators'

export default () => {
  combineLatest(isListeningStore, selectedDeviceStore)
    .pipe(
      tap(([isListening, selectedDevice]) => {
        console.log('this stuff changed')
      })
    )
    .subscribe()
}
