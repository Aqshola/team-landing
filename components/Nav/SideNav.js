import React from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeInLeft } from '../Animation/animation'
import SideNavLink from './SideNavLink'

export default function SideNav({ setShow }) {
  return (
    <motion.div
      initial="hidden"
      variants={Fade}
      animate="show"
      exit="hidden"
      className="h-screen w-full fixed right-0 top-0 w-100 block bg-black bg-opacity-20 md:hidden"
    >
      <motion.div
        variants={FadeInLeft}
        className="w-1/2 flex flex-col h-screen bg-white p-10 transform shadow-md"
      >
        <button
          className="w-max self-end"
          onClick={() => {
            setShow()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-16 flex flex-col space-y-5">
          <SideNavLink href="/">Home</SideNavLink>
          <SideNavLink>Feature</SideNavLink>
          <SideNavLink>Pricing</SideNavLink>
          <SideNavLink>Testimonial</SideNavLink>
        </div>
        <div className="mt-auto text-center">Social media</div>
      </motion.div>
    </motion.div>
  )
}
