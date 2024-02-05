import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <React.Fragment>
      <header className="container sectionPadding">
        <div>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1
            }}
            initial={{ opacity: 0,scale: 0}}
          >
            <h1>Elevate Your Brand</h1>
            <h1>With</h1>
            <h1>Veteran Media Solution</h1>
          </motion.div>
          <motion.p
            animate={{ opacity: 1, scale: 1}}
            transition={{
              duration: 2,
            }}
            initial={{ opacity: 0,scale: 0 }}
          >
            The best place to get creative advertising, smart marketing, strong
            branding, clever promotions, and online exposure services to shine a
            light on your brand.
          </motion.p>
          
          <div className="scrollDown">
            <motion.div class="scroll-downs"
             animate={{ opacity: 1, y: 0}}
             transition={{
               duration: 1,
             }}
             initial={{ opacity: 0, y:100}}
            >
              <div class="mousey">
                <div class="scroller"></div>
              </div>
            </motion.div>
            <motion.p
             animate={{ opacity: 1}}
             transition={{
               duration: 1,
             }}
             initial={{ opacity: 0}}
            >Scroll Down</motion.p>
          </div>
        </div>
       
      </header>
    </React.Fragment>
  );
}

export default Header;
