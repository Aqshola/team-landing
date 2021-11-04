import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'

export default function NavLink({ href, children }) {
  const route = useRouter()
  return (
    <Link passHref href={href || '#'}>
      <a className={clsx('', route.pathname === href && ['text-pink-primary'])}>
        {children}
      </a>
    </Link>
  )
}
