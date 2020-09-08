import { BehaviorSubject, interval } from 'rxjs'
// import { useObservableState, useSubscription } from 'observable-hooks'
import { useObservableState } from 'observable-hooks'

const state = new BehaviorSubject()
// interval(2000).subscribe(state)
export default () => {
  return [useObservableState(state), state.next.bind(state)]
}
