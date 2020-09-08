import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import useAvailableDevicesStore from './useAvailableDevicesStore'
import useSelectedDevice from './useSelectedDevice'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const AudioDevicePicker = () => {
  const classes = useStyles()

  const availableDevices = useAvailableDevicesStore() || []
  const [selectedDevice, setDevice] = useSelectedDevice()

  console.log('diev', availableDevices, selectedDevice)

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedDevice}
          onChange={e => setDevice(e.target.value)}
        >
          {availableDevices.map(device => {
            return (
              <MenuItem key={device.id || 0} value={device.id}>
                {device.label || 'default'}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}

export default AudioDevicePicker
