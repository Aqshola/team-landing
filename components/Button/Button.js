import React from 'react'
import clsx from 'clsx'

export default function Button({ classNames, children, type, ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        'transition-all py-2 px-4 md:py-4 md:px-8 font-medium ',
        type === 'primary' && [''],
        type === 'outline' && [
          'border-2  rounded-full border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white',
        ]
      )}
    >
      {children}
    </button>
  )
}
