import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const variants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

export default function Motion(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "fit-content",
        overflow: "hidden",
      }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25, delay: 0.15 }}>
        {props.children}
      </motion.div>
    </div>
  );
}
