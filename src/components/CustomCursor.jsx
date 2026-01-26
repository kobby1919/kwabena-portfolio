import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveHandler = (e) => {
      mouseX.set(e.clientX - 40);
      mouseY.set(e.clientY - 40);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 blur-xl opacity-60" />
    </motion.div>
  );
}

export default CustomCursor;
