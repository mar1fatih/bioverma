import { motion } from "motion/react";

const ArrowBigDownIcon = ({
  className,
  size = 100,
  ...props
}) => {
  return (
    <div
      className={className}
      {...props}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M15 6v6h4l-7 7-7-7h4V6h6z"
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
};

export { ArrowBigDownIcon };