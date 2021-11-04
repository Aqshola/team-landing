import { useRouter } from 'next/dist/client/router'
import clsx from 'clsx'
import React from 'react'

export default function SideNavLink({ href, children, ...props }) {
  const route = useRouter()

  return (
    <a
      href={href}
      className={clsx(
        'transition-colors border-b font-semibold pb-2  hover:text-blue-600',
        href === route.pathname && ['text-blue-600'],
        href !== route.pathname && ['text-black-primary']
      )}
      {...props}
    >
      {children}
    </a>
  )
}
