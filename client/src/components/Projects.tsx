import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'FitTrack Pro',
      description: 'Comprehensive fitness tracking app',
      longDescription: 'A full-featured fitness tracking application with real-time workout monitoring, personalized recommendations, and social features. Built with SwiftUI and Core Data.',
      image: '🏋️',
      tags: ['SwiftUI', 'Core Data', 'HealthKit'],
      link: '#',
    },
    {
      id: 2,
      title: 'WeatherFlow',
      description: 'Beautiful weather forecasting app',
      longDescription: 'An elegant weather app with detailed forecasts, severe weather alerts, and beautiful animations. Integrates with multiple weather APIs.',
      image: '🌤️',
      tags: ['SwiftUI', 'REST API', 'MapKit'],
      link: '#',
    },
    {
      id: 3,
      title: 'NotesSync',
      description: 'Cloud-synced notes application',
      longDescription: 'A powerful notes app with cloud synchronization, rich text editing, and offline support. Features end-to-end encryption for privacy.',
      image: '📝',
      tags: ['UIKit', 'Firebase', 'CloudKit'],
      link: '#',
    },
    {
      id: 4,
      title: 'TaskMaster',
      description: 'Advanced task management system',
      longDescription: 'A sophisticated task management app with team collaboration, real-time updates, and intelligent scheduling. Built with modern iOS best practices.',
      image: '✅',
      tags: ['SwiftUI', 'Combine', 'WebSocket'],
      link: '#',
    },
    {
      id: 5,
      title: 'PhotoGallery',
      description: 'AI-powered photo organization',
      longDescription: 'An intelligent photo gallery app that uses machine learning for automatic organization and smart search capabilities.',
      image: '📸',
      tags: ['Vision Framework', 'CoreML', 'SwiftUI'],
      link: '#',
    },
    {
      id: 6,
      title: 'StreamHub',
      description: 'Video streaming platform',
      longDescription: 'A streaming app with adaptive bitrate video playback, offline downloads, and personalized recommendations.',
      image: '🎬',
      tags: ['AVFoundation', 'HLS', 'SwiftUI'],
      link: '#',
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
    <section id="projects" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of my most impactful projects that showcase my skills and passion for iOS development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 cursor-pointer transition-all"
            >
              {/* Project Image/Emoji */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-6xl"
                >
                  {project.image}
                </motion.div>

                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    <ExternalLink size={24} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-foreground/70 hover:text-primary transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-4 bg-card border-b border-border">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Large Image */}
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-8xl">{selectedProject.image}</div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>

                {/* Description */}
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wide">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  >
                    View Project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
                  >
                    Source Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
