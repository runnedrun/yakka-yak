import { BehaviorSubject } from 'rxjs'
import { useObservableState } from 'observable-hooks'

const isListeningStore = new BehaviorSubject(false)

const useIsListening = () => [
  useObservableState(isListeningStore),
  _ => isListeningStore.next(_)
]

export { isListeningStore, useIsListening }
