import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    ' 8+ years of iOS development experience',
    'Expert in Swift, SwiftUI, and UIKit',
    'Published apps with 500K+ downloads',
    'Strong focus on performance and UX',
    'Mentored junior developers',
    'Open source contributor',
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
    <section id="about" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 p-1"
              >
                <div className="w-full h-full rounded-2xl bg-background" />
              </motion.div>

              {/* Profile Image Placeholder */}
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-6xl font-bold text-blue-400">
                  📱
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
            >
              I'm a passionate iOS developer with over 8 years of experience building beautiful, performant, and user-centric applications. I specialize in modern Swift development, SwiftUI, and creating seamless user experiences that users love.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
            >
              My journey in iOS development has taken me through startups, scale-ups, and established tech companies. I'm committed to writing clean, maintainable code and staying at the forefront of iOS technology.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
