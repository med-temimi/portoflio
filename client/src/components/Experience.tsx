import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  logo: string;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Senior iOS Developer',
      period: '2022 - Present',
      description: 'Leading iOS development initiatives and mentoring junior developers.',
      achievements: [
        'Led development of flagship app with 500K+ downloads',
        'Implemented SwiftUI architecture improvements',
        'Mentored 3 junior developers',
      ],
      logo: '🏢',
    },
    {
      id: 2,
      company: 'StartupHub',
      position: 'iOS Developer',
      period: '2020 - 2022',
      description: 'Developed multiple iOS applications from concept to App Store launch.',
      achievements: [
        'Shipped 4 production apps',
        'Reduced app size by 40%',
        'Implemented CI/CD pipeline',
      ],
      logo: '🚀',
    },
    {
      id: 3,
      company: 'Mobile Solutions Ltd.',
      position: 'Junior iOS Developer',
      period: '2018 - 2020',
      description: 'Started iOS development journey, learned best practices and modern frameworks.',
      achievements: [
        'Completed iOS bootcamp',
        'Contributed to 6+ client projects',
        'Mastered Swift and UIKit',
      ],
      logo: '📱',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional journey in iOS development, from junior developer to senior engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 top-2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-2xl border-4 border-background shadow-lg"
                >
                  {exp.logo}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-foreground/70"
                        >
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-card border border-border"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">8+</p>
              <p className="text-foreground/70">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">20+</p>
              <p className="text-foreground/70">Apps Shipped</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500K+</p>
              <p className="text-foreground/70">Total Downloads</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
