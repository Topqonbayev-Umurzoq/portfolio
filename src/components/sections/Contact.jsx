import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'Umurzoquz08@gmail.com',
      link: 'mailto:Umurzoquz08@gmail.com',
      color: '#ff006e',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Topqonbayev-Umurzoq',
      link: 'https://github.com/Topqonbayev-Umurzoq',
      color: '#00eaff',
    },
    {
      icon: '✈️',
      label: 'Telegram',
      value: '@TOPQONBAYEV_UMURZOQ',
      link: 'https://t.me/TOPQONBAYEV_UMURZOQ',
      color: '#00d4ff',
    },
    {
      icon: '📸',
      label: 'Instagram',
      value: '@TOPQONBAYEV_UMURZOQ',
      link: 'https://www.instagram.com/TOPQONBAYEV_UMURZOQ',
      color: '#ff006e',
    },
    {
      icon: '📹',
      label: 'YouTube',
      value: '@Umurzoq_uz',
      link: 'https://www.youtube.com/@Umurzoq_uz',
      color: '#ff0000',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  }

  return (
    <div className="content-container">
      <div className="space-y-16 max-w-4xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl font-black uppercase glow-text mb-4">CONTACT TERMINAL</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cosmic-blue"></div>
            <span className="text-cosmic-purple">[ OPEN COMMUNICATION CHANNEL ]</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cosmic-blue"></div>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          className="glass-intense p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-cosmic-blue/80 leading-relaxed mb-4">
            Ready to collaborate on amazing projects? Let's connect and create something extraordinary together!
          </p>
          <p className="text-sm font-mono text-cosmic-purple">
            Choose your preferred channel below to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target={contact.link.startsWith('mailto') ? '_self' : '_blank'}
              rel={contact.link.startsWith('mailto') ? '' : 'noopener noreferrer'}
              variants={item}
              className="glass-intense p-8 flex items-center gap-6 cursor-pointer group"
              whileHover={{
                scale: 1.02,
                x: 10,
                boxShadow: `0 0 30px ${contact.color}80`,
              }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl flex-shrink-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                {contact.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-sm uppercase tracking-widest text-cosmic-purple font-bold mb-2">
                  {contact.label}
                </p>
                <p className="text-xl font-bold text-cosmic-blue group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </div>

              {/* Arrow */}
              <motion.div
                className="text-2xl text-cosmic-blue/50 group-hover:text-cosmic-blue transition-colors"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="glass-intense p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-cosmic-blue uppercase mb-6">Other Platforms</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.link}
                target={contact.link.startsWith('mailto') ? '_self' : '_blank'}
                rel={contact.link.startsWith('mailto') ? '' : 'noopener noreferrer'}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl hover:filter hover:drop-shadow-lg transition-all"
              >
                {contact.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-cosmic-purple font-mono text-sm uppercase tracking-wider">
            🚀 Let's build the future together
          </p>
          <motion.div
            className="flex justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-cosmic-blue">●</span>
            <span className="text-cosmic-purple">●</span>
            <span className="text-cosmic-blue">●</span>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-cosmic-blue/10 rounded-full pointer-events-none"
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Contact
