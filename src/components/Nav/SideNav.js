import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Fade, FadeInLeft } from '../Animation/animation'
import SideNavLink from './SideNavLink'
import { CgClose } from 'react-icons/cg'
import useOutside from '../../utils/useOutside'

export default function SideNav({ setShow }) {
  const ref = useRef(null)
  useOutside(ref, setShow)
  return (
    <motion.div
      initial="hidden"
      variants={Fade}
      animate="show"
      exit="hidden"
      className="h-screen w-full fixed right-0 top-0 w-100 block bg-black bg-opacity-20 md:hidden"
    >
      <motion.div
        ref={ref}
        variants={FadeInLeft}
        className="w-1/2 flex flex-col h-screen bg-white p-5 transform shadow-md"
      >
        <button
          className="w-max self-end"
          onClick={() => {
            setShow()
          }}
        >
          <CgClose className="h-6 w-6" />
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
