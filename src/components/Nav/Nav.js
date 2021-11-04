import React, { useEffect } from 'react'
import clsx from 'clsx'
import Button from '../Button/Button'
import SideNav from './SideNav'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import NavLink from './NavLink'

export default function Nav() {
  const [showSideNav, setshowSideNav] = useState(false)
  const [scrollActive, setscrollActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setscrollActive(window.scrollY > 20)
    })
  }, [])

  return (
    <nav className="z-50 sticky top-0 bg-white">
      <div
        className={clsx(
          'transition-all max-w-screen-2xl p-5 px-5 py-5 grid grid-cols-2 md:grid-cols-12  items-center mx-auto relative',
          scrollActive && 'shadow-md'
        )}
      >
        <h1 className="col-span-1  md:col-start-2 md:col-span-2 text-xl font-bold">
          Nama Team
        </h1>
        <div className="hidden md:flex col-start-4 col-span-6 justify-center space-x-10">
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href="">Advertise</NavLink>
          <NavLink href="">Supports</NavLink>
          <NavLink href="">Contact</NavLink>
        </div>

        <div className="col-start-2 md:col-span-2 col-span-1 md:col-start-11  flex justify-end md:justify-start md:space-x-0 space-x-4 ">
          <Button type="outline">Get started</Button>
          <button
            className="md:hidden"
            aria-label="control nav"
            onClick={() => setshowSideNav(!showSideNav)}
          >
            <CgMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showSideNav && <SideNav setShow={() => setshowSideNav(false)} />}
      </AnimatePresence>
    </nav>
  )
}
