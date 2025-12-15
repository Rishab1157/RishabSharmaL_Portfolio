import { motion } from 'framer-motion'
import { FaGraduationCap, FaDownload, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { education as educationData } from '../config/content'

const Education = () => {
  const edu = educationData

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">Where it all started</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-inner">
                  {edu.logo ? (
                    <img src={edu.logo} alt="School logo" className="h-full w-full object-cover rounded-full" />
                  ) : (
                    <FaGraduationCap size={20} />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                  {edu.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <FaMapMarkerAlt className="text-primary-600 dark:text-primary-300" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200 border border-primary-100 dark:border-primary-800 font-semibold">
                  {edu.cgpa}
                </span>
                <span className="text-gray-500 dark:text-gray-400">Graduated {edu.year}</span>
                {edu.degreePdf && (
                  <a
                    href={edu.degreePdf}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white font-semibold shadow hover:bg-primary-700 transition-colors"
                  >
                    <FaDownload />
                    Download Degree PDF
                  </a>
                )}
                {edu.mapLink && (
                  <a
                    href={edu.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FaMapMarkerAlt className="text-primary-600 dark:text-primary-300" />
                    View on Maps
                  </a>
                )}
              </div>
            </div>

            <div className="relative w-full h-40 md:h-56 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
              <img
                src={edu.schoolImage}
                alt={edu.school}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 via-transparent to-accent-500/15 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

