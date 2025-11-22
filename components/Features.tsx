import React from 'react';
import { BarChart3, Users, Shield, Zap, Layers, Clock } from 'lucide-react';
import { Feature } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const featuresList: Feature[] = [
  {
    id: '1',
    title: 'Real-time Analytics',
    description: 'Visualize progress with instant data updates and clean dashboards.',
    icon: BarChart3,
  },
  {
    id: '2',
    title: 'Team Collaboration',
    description: 'Built-in chat and sharing to reduce context switching.',
    icon: Users,
  },
  {
    id: '3',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption keeps your data safe and compliant.',
    icon: Shield,
  },
  {
    id: '4',
    title: 'Automated Workflows',
    description: 'Automate repetitive tasks and focus on creative work.',
    icon: Zap,
  },
  {
    id: '5',
    title: 'Smart Integrations',
    description: 'Connect with Slack, GitHub, and tools you already use.',
    icon: Layers,
  },
  {
    id: '6',
    title: 'Time Tracking',
    description: 'Effortless tracking integrated directly into your tasks.',
    icon: Clock,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
              Powerful features wrapped in a beautifully simple interface.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <RevealOnScroll key={feature.id} delay={index * 100}>
              <div 
                className="group p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800/60 hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all duration-300 backdrop-blur-sm h-full hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 cursor-default"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                  <feature.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};