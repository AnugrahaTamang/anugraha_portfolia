"use client";

import { Briefcase, Code, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          About <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-lg leading-7 mb-8 text-center">
          Hi, I&apos; <span className="font-semibold">Anugraha Tamang</span>, a
          web developer with skills in
          <span className="font-medium text-blue-500">
            JavaScript, Node.js, and Express
          </span>
          . I love crafting backend systems and exploring modern web
          technologies. I&apos;m always excited to collaborate, contribute, and
          solve real-world challenges through code.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow">
            <Code className="text-blue-500 w-8 h-8" />
            <div>
              <h4 className="font-semibold text-xl">Developer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Focused on backend technologies and clean code practices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow">
            <Briefcase className="text-green-500 w-8 h-8" />
            <div>
              <h4 className="font-semibold text-xl">Collaborator</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Eager to contribute in team projects and open-source
                communities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow">
            <Users className="text-purple-500 w-8 h-8" />
            <div>
              <h4 className="font-semibold text-xl">Lifelong Learner</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Always learning — currently exploring Next.js, AI, and cloud
                services.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
