import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const SnackBarModal = ({
  isOpen,
  onClose,
  message,
  severity,
  autoHideDuration,
}) => {
  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration || 4000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={severity} onClose={onClose} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBarModal
