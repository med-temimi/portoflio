import { motion } from 'framer-motion';
import { Code2, Zap, Database, Cloud, Smartphone, Palette } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: Code2,
      name: 'Swift',
      description: 'Modern iOS development',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Smartphone,
      name: 'SwiftUI',
      description: 'Declarative UI framework',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Zap,
      name: 'UIKit',
      description: 'Traditional UI framework',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Database,
      name: 'Core Data',
      description: 'Data persistence',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Cloud,
      name: 'Firebase',
      description: 'Backend services',
      color: 'from-amber-400 to-amber-600',
    },
    {
      icon: Palette,
      name: 'Design',
      description: 'UI/UX principles',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build exceptional iOS applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Glow Effect on Hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-block p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-foreground/60">{skill.description}</p>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 40 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-4 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-card border border-border"
        >
          <h3 className="text-2xl font-semibold mb-4">Also Proficient In</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Xcode', 'Git', 'REST APIs', 'GraphQL', 'Unit Testing', 'CI/CD', 'Agile', 'App Store'].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-3 rounded-lg bg-muted text-center text-foreground/80 hover:text-primary transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
