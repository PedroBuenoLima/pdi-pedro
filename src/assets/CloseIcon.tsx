import React from 'react'

interface ArrowRightProps {
    width?: number
    height?: number
    color?: string
  }
  
  const CloseIcon = ({
    height = 24,
    width = 24,
    color = 'black',
  }: ArrowRightProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
  
  export default CloseIcon
  