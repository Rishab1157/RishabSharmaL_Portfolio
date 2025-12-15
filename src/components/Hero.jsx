import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope } from 'react-icons/fa'
import { FiLayout, FiCloud, FiCheckCircle } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'
import Tilt from 'react-parallax-tilt'
import { hero, snapshotItems } from '../config/content'

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = hero.resumePath
    link.download = 'Rishab_Sharma_Resume.pdf'
    link.click()
  }

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-0 w-72 h-72 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-32 right-0 w-80 h-80 bg-accent-200 dark:bg-accent-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -90, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-primary-700 dark:text-primary-300 font-semibold">
              {hero.title}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
              {hero.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl">
              {hero.headline}
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {hero.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900} glareEnable={false} scale={1.02}>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadResume}
                  className="btn-glass"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaDownload />
                    Download Resume
                  </span>
                </motion.button>
              </Tilt>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900} glareEnable={false} scale={1.02}>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactClick}
                  className="btn-glass-ghost"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaEnvelope />
                    Get In Touch
                  </span>
                </motion.button>
              </Tilt>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative rounded-3xl bg-white/80 dark:bg-gray-900/60 backdrop-blur border border-white/60 dark:border-gray-800 shadow-2xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 pointer-events-none" />
              <div className="relative flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary-600 dark:text-primary-300 font-semibold">Snapshot</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Steady delivery</h3>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-200 text-sm font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
                    {snapshotItems.map((item, idx) => {
                      const iconMap = [FiLayout, FiCloud, FiCheckCircle]
                      const Icon = iconMap[idx] || FiCheckCircle
                      return (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -2, scale: 1.01 }}
                          className="rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-4 shadow-sm min-h-[150px] min-w-0"
                        >
                          <span className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold">
                            <span className="h-10 w-10 aspect-square rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex-shrink-0 flex items-center justify-center text-primary-600 dark:text-primary-300 shadow-[0_6px_12px_-10px_rgba(0,0,0,0.35)]">
                              <Icon className="text-lg" />
                            </span>
                            <span className="leading-tight text-sm sm:text-base font-semibold break-words flex-1 whitespace-normal">
                              {item.title}
                            </span>
                          </span>
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-snug">{item.desc}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#skills"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-primary-600 transition-colors"
          >
            <HiArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

