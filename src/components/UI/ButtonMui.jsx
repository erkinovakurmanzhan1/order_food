import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const ButtonMui = ({
  children,
  variant = 'contained',
  borderstyle = 'rounded',
  ...rest
}) => {
  return (
    <div>
      <StyledButton variant={variant} borderstyle={borderstyle} {...rest}>
        {children}
      </StyledButton>
    </div>
  )
}

export default ButtonMui

const getBackgroundColor = (variant) => {
  return variant === 'contained' ? '#fff' : '#8a2b06'
}

const getBorder = (variant) => {
  return variant === 'contained' ? 'none' : '1px solid #8a2b06'
}

const getBorderRadius = (borderstyle) => {
  return borderstyle === 'rounded' ? '20px' : '6px'
}

const getPadding = (borderstyle) => {
  return borderstyle === 'rounded' ? '10px 32px' : '8px 14px'
}

const StyledButton = styled(Button)(({ variant, borderstyle }) => ({
  '&': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3125rem',
    background: getBackgroundColor(variant),
    borderRadius: getBorderRadius(borderstyle),
    padding: getPadding(borderstyle),
    fontWeight: '600',
    lineHeight: '1.5rem',
    border: getBorder(variant),
    cursor: 'pointer',
    color: '#FFFF',

    '&:hover': {
      background: '#7E2A0A',
      color: '#fff',
      path: {
        stroke: '#fff',
      },
    },
    '&:active': {
      background: '#993108',
      color: '#FFFF',
    },
  },

  '&:hover': {
    backgroundColor: '#2c0d00',
  },
}))
