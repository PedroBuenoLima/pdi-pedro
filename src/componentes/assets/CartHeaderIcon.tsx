import React from 'react'

interface CartHeaderIconProps {
  width?: number
  height?: number
  className?: string
  color?: string
}

export const CartHeaderIcon = ({
  width = 32,
  height = 32,
  className,
  color = 'white',
}: CartHeaderIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    overflow="unset"
  >
    <path
      d="M9.5 21C10.6046 21 11.5 20.1046 11.5 19C11.5 17.8954 10.6046 17 9.5 17C8.39543 17 7.5 17.8954 7.5 19C7.5 20.1046 8.39543 21 9.5 21Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 21C18.6046 21 19.5 20.1046 19.5 19C19.5 17.8954 18.6046 17 17.5 17C16.3954 17 15.5 17.8954 15.5 19C15.5 20.1046 16.3954 21 17.5 21Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 3H5.5L7.5 15C7.71572 15.6135 8.12494 16.1402 8.66602 16.501C9.2071 16.8617 9.85075 17.0368 10.5 17H17.5C18.1493 17.0368 18.7929 16.8617 19.334 16.501C19.8751 16.1402 20.2843 15.6135 20.5 15L21.5 8H6.3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
