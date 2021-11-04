import React from 'react'
import Button from '../Button/Button'
import SideNav from './SideNav'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'

export default function Nav() {
  const [showSideNav, setshowSideNav] = useState(false)

  return (
    <nav className="relative">
      <div className="max-w-screen-xl p-5 md:px-0 grid grid-cols-2 md:grid-cols-12 py-4  items-center mx-auto relative">
        <h1 className="col-span-1 md:col-start-2 md:col-span-2 text-xl font-bold">
          Nama Team
        </h1>
        <div className="hidden md:flex col-start-4 col-span-6 justify-center space-x-10">
          <a href="">Home</a>
          <a href="">Advertise</a>
          <a href="">Supports</a>
          <a href="">Contact</a>
        </div>

        <div className="col-start-2 md:col-span-2 col-span-1 md:col-start-11  flex justify-end md:space-x-0 space-x-4">
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
