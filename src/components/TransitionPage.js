import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { React, Fragment } from 'react';
const animationConfiguration = {
  initial: { opacity: 0, zIndex: -1, position: 'relative' },
  animate: { opacity: 1, zIndex: -1 },
  exit: { opacity: 0 },
};

const Transitions = ({ children }) => {
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

const gsapscrollanimation = () => {
  var tl = gsap.timeline();
};

export default Transitions;
