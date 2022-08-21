import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div className="comp_intro">
            <h1 className="head-text">Del consult</h1>
            <p className="p-text">
            At BAE Systems, our advanced defence technology protects people and national security, and keeps critical information and infrastructure secure. We search for new ways to provide our customers with a competitive edge across the air, maritime, land and cyber domains. We employ a skilled workforce of 90,500 people in more than 40 countries, and work closely with local partners to support economic development by transferring knowledge, skills and technology.
            </p>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Accra east legon </p>
        </div>
      </div>
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.civil_engineering} alt="civil engineering bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
    </div>
  )
}

export default Header