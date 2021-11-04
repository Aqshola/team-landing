export const Fade = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      // The first child will appear AFTER the parrent has appeared on the screen
      delay: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.2,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.3,
    },
  },
}

export const FadeInLeft = {
  hidden: {
    x: -350,
    transition: {
      duration: 0.5,
      type: 'spring',
      bounce: 0,
    },
  },

  show: {
    x: 0,
    transition: {
      ease: [0.42, 0, 0.58, 1],
      duration: 0.5,
      type: 'spring',
      bounce: 0,
    },
  },
}
