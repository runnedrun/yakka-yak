import React from 'react'
// import { storeDef as audioDevices } from './useAvailableDevicesStore'
import { useLocalStore } from 'mobx-react'
import StoreContext from './StoreContext'

export const StoreProvider = ({ children }) => {
  // const stores = { ...audioDevices, test: 0 }
  const store = useLocalStore(() => ({}))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
