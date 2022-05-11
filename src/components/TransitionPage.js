import { motion } from 'framer-motion';
import { React, useEffect } from 'react';
import { useIsPresent } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const animationConfiguration = {
  initial: { opacity: 0, zIndex: -1, position: 'relative' },
  animate: { opacity: 1, zIndex: 0 },
  exit: { opacity: 0 },
};

const Transitions = ({ children }) => {
  const isPresent = useIsPresent();
  useEffect(() => {
    ScrollTrigger.refresh();

    setTimeout(function () {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }, 500);
  }, [isPresent]);

  return (
    <motion.div
      variants={animationConfiguration}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}
    >
      <div>{children}</div>
    </motion.div>
  );
};

export default Transitions;
