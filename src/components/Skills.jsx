import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills as skillsConfig } from '../config/content'

const Skills = () => {
  const skillsFlat = skillsConfig

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Tools I use day-to-day
          </p>
        </motion.div>

        <SkillGrid skills={skillsFlat} containerVariants={containerVariants} itemVariants={itemVariants} />
      </div>
    </section>
  )
}

const SkillGrid = ({ skills, containerVariants, itemVariants }) => {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { amount: 0.25, once: true })

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      ref={gridRef}
      style={{ perspective: 1200 }}
      className={`relative overflow-hidden rounded-3xl bg-white/65 dark:bg-gray-900/65 text-gray-900 dark:text-white shadow-[0_16px_40px_-22px_rgba(0,0,0,0.35)] border border-gray-200/80 dark:border-gray-800/80 p-6 transition-all duration-600 ${isInView ? 'opacity-100' : 'opacity-65'}`}
    >

      {/* Glass double doors */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex"
        style={{ perspective: 2000, perspectiveOrigin: 'center center', gap: 0 }}
        initial={false}
        animate={
          isInView
            ? { opacity: 1, transition: { duration: 0.9, ease: 'easeInOut' } }
            : { opacity: 0.45, transition: { duration: 0.9, ease: 'easeInOut' } }
        }
      >
        <motion.div
          className="w-1/2 h-full backdrop-blur-xl shadow-[0_18px_32px_-18px_rgba(0,0,0,0.2)] door-gradient-left"
          initial={{ x: '-100%', rotateY: -45 }}
          animate={
            isInView
              ? { x: '0%', rotateY: 0 }
              : { x: '-100%', rotateY: -45 }
          }
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: '0% 50%',
            backfaceVisibility: 'hidden',
            margin: 0,
            padding: 0,
          }}
        />
        <motion.div
          className="w-1/2 h-full backdrop-blur-xl shadow-[0_18px_32px_-18px_rgba(0,0,0,0.2)] door-gradient-right"
          initial={{ x: '100%', rotateY: 45 }}
          animate={
            isInView
              ? { x: '0%', rotateY: 0 }
              : { x: '100%', rotateY: 45 }
          }
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: '100% 50%',
            backfaceVisibility: 'hidden',
            margin: 0,
            padding: 0,
          }}
        />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative">
        {skills.map((skill, idx) => {
          const IconComponent = skill.icon
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-[0_12px_24px_-14px_rgba(0,0,0,0.35)] min-w-0"
            >
              <span className="relative flex items-center justify-center h-13 w-13 min-h-[52px] min-w-[52px] rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 shadow-[0_8px_16px_-10px_rgba(0,0,0,0.2)]">
                <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 shadow-[0_6px_12px_-8px_rgba(0,0,0,0.25)] border border-white/60">
                  <IconComponent className={`text-2xl ${skill.color}`} />
                </span>
              </span>
              <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-50 leading-tight break-words min-w-0">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Skills

