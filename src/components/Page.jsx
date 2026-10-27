import { useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export default function Page({ children, className = "page" }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="curtain"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0, transition: { duration: 0.6, ease, delay: 0.1 } }}
        exit={{ scaleY: 1, transition: { duration: 0.5, ease } }}
      />
      <main className={className}>{children}</main>
    </>
  );
}