import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { toJS, isObservableObject } from 'mobx'

const origLog = console.log
window.console.log = (...values) => {
  const readyToLog = values.map(value => {
    origLog("sd", isObservableObject(value))
    return isObservableObject(value) ? toJS(value) : value
  })
  origLog(...readyToLog)
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
