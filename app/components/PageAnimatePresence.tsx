"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import FrozenRoute from "./FrozenRoute";
import Transition from "./Transition";

const PageAnimatePresence: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <Transition />
      </motion.div>
      <FrozenRoute>{children}</FrozenRoute>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
