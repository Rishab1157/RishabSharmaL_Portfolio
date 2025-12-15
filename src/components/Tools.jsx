import { motion } from 'framer-motion'
import { tools } from '../config/content'

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

const Tools = () => {
  return (
    <section id="tools" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & IDEs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Environments and platforms I use daily
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {tools.map((tool, idx) => {
            const IconComponent = tool.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center gap-3 px-3 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-[0_12px_24px_-14px_rgba(0,0,0,0.35)]"
              >
                <span className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 border border-white/70 shadow-[0_8px_16px_-10px_rgba(0,0,0,0.25)]">
                  <IconComponent className={`text-3xl ${tool.color}`} />
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-50 text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Tools

