import { motion } from "motion/react";

const CYCLE = 2;

const wave = (i) => ({
  opacity: [1, 0, 0, 1, 1],
  transition: {
    duration: CYCLE,
    times: [0, 0.15, 0.2 + i * 0.07, 0.38 + i * 0.07, 1],
    ease: "easeInOut",
    repeat: Infinity,
  },
});

export const RadioLoopIcon = ({ size = 20, className, ...props }) => (
  <svg
    fill="none"
    height={size}
    width={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <motion.path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" animate={wave(1)} />
    <motion.path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" animate={wave(0)} />
    <circle cx="12" cy="12" r="2" />
    <motion.path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" animate={wave(0)} />
    <motion.path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" animate={wave(1)} />
  </svg>
);
