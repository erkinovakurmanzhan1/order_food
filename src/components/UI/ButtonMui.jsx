import { Button } from '@mui/material'
import React from 'react'

const ButtonMui = ({ children, ...rest }) => {
  return (
    <div>
      <Button variant="contained" {...rest}>
        {children}
      </Button>
    </div>
  )
}

export default ButtonMui
