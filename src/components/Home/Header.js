import Button from '../Button/Button'
import Image from 'next/image'

import React from 'react'

export default function Header() {
  return (
    <section
      id="home"
      className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-12 mt-16 md:mt-24 auto-rows-auto "
    >
      <div
        id="header"
        className="md:col-start-4 col-span-1 md:col-span-6 text-center space-y-6 md:space-y-8"
      >
        <h1 className="text-4xl leading-snug md:leading-snug  md:text-6xl text-black-primary font-bold ">
          Top Quality Digital Products To Explore
        </h1>
        <p className="leading-loose  md:leading-loose md:text-xl  text-black-primary px-10 md:px-16 mx-auto">
          Get your blood tests delivered at let home collect sample from the
          victory of the managments that supplies best design system guidelines
          ever.
        </p>
        <Button type={'primary'}>Explore</Button>
      </div>
      <div
        id="header-illustration"
        className="col-span-1 md:col-span-12 grid grid-cols-12 mt-8"
      >
        <div className="col-start-1 col-span-2 relative">
          <div className="absolute w-36 md:w-96 md:h-96 md:-top-28  left-0">
            <Image
              src="/pattern/blob1.svg"
              layout="responsive"
              height={1007}
              width={700}
              aria-label="Mockup"
            />
          </div>
        </div>
        <div
          id="header-img"
          className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 z-20"
        >
          <Image
            src="/img/browser-mockup.png"
            layout="responsive"
            height={720}
            width={1000}
            aria-label="Mockup"
          />
        </div>
        <div className="col-start-12 col-span-1 md:col-start-11  md:col-span-2 relative z-10">
          <div className="absolute w-36 md:w-96 md:h-96  right-0 top-10">
            <Image
              src="/pattern/blob2.svg"
              layout="responsive"
              height={1200}
              width={900}
              aria-label="Mockup"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
