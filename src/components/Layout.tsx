import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AnimatePresence>
      <motion.div
        // key={JSON.stringify(children)}
        key={Math.random()}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        <article className="max-w-none prose prose-strone lg:prose-xl">
          {children}
        </article>
      </motion.div>
    </AnimatePresence>
  );
}
