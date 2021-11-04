import React from 'react'
import clsx from 'clsx'

export default function Button({ classNames, children, type, ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        'transition-all py-3 px-4 md:py-4 md:px-8 font-medium rounded-full',
        type === 'primary' && ['bg-pink-primary text-white hover:shadow-lg'],
        type === 'outline' && [
          'border-2   border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white',
        ],
        classNames
      )}
    >
      {children}
    </button>
  )
}
