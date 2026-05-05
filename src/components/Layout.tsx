import { Outlet, useLocation } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { AnimatePresence, motion } from 'framer-motion';

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="mobile-container flex flex-col min-h-screen shadow-2xl">
      <main className="flex-1 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <BottomNav />
    </div>
  );
};
