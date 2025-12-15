import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaLinkedin, FaDownload } from 'react-icons/fa'
import { experiences as experiencesData } from '../config/content'

const Experience = () => {
  const experiences = experiencesData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Work that shows what I deliver
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-300 via-white to-white opacity-80 rounded-full" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12"
              >
                <div className="absolute left-[10px] top-6 h-4 w-4 rounded-full bg-primary-500 dark:bg-primary-300 border-2 border-white dark:border-gray-900 shadow-md" />
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left: responsibilities */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-primary-50 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-inner">
                          {exp.leftLogo || exp.logo ? (
                            <img src={exp.leftLogo || exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-cover" />
                          ) : (
                            <FaBriefcase className="text-primary-600 dark:text-primary-300" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{exp.position}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <span className="text-primary-600 dark:text-primary-400 mt-[3px] leading-none">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    {exp.certificates && exp.certificates.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Documents & Certificates</p>
                        <div className="flex flex-wrap gap-3">
                          {exp.certificates.map((doc, docIdx) => (
                            <a
                              key={docIdx}
                              href={doc.url}
                              download
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors text-sm font-semibold"
                            >
                              <FaDownload />
                              {doc.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    </div>

                    {/* Right: company details */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="h-24 w-24 rounded-2xl overflow-hidden bg-primary-50 border border-primary-100 dark:border-primary-800 flex items-center justify-center shadow-inner">
                          {exp.rightLogo || exp.logo ? (
                            <img src={exp.rightLogo || exp.logo} alt={exp.company} className="h-full w-full object-cover" />
                          ) : (
                            <FaBriefcase className="text-primary-600 dark:text-primary-300" />
                          )}
                        </div>
                        <div className="space-y-1">
                          {exp.location && (
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <FaMapMarkerAlt className="text-primary-600 dark:text-primary-300" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                          <span className="text-primary-700 dark:text-primary-200 font-semibold bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full border border-primary-100 dark:border-primary-800 inline-block w-fit">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      {exp.linkedin && (
                        <a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors text-sm font-semibold w-fit"
                        >
                          <FaLinkedin />
                          Company LinkedIn
                        </a>
                      )}
                      {exp.mapLink && (
                        <a
                          href={exp.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-semibold w-fit"
                        >
                          <FaMapMarkerAlt />
                          View on Maps
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

