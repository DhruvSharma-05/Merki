import React from 'react';
import { Review } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenning',
    role: 'Product at TechFlow',
    content: "Merki has transformed how we operate. The workflows alone saved us 10+ hours a week. Indispensable.",
    avatarUrl: 'https://picsum.photos/id/1027/100/100',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CTO at StartUp Inc.',
    content: "Security without complexity. Merki gives us enterprise controls with a UI our developers actually love using.",
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Design Lead',
    content: "Finally, a tool that doesn't feel like a spreadsheet. Beautiful, intuitive, and makes management enjoyable.",
    avatarUrl: 'https://picsum.photos/id/338/100/100',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <RevealOnScroll key={review.id} delay={index * 150} className="h-full">
              <div className="group p-6 flex flex-col h-full rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1 cursor-default border border-transparent hover:border-slate-200 dark:hover:border-slate-800">
                <div className="flex items-center mb-6">
                  <img 
                    src={review.avatarUrl} 
                    alt={review.name} 
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800 transition-all duration-300 group-hover:ring-indigo-300 dark:group-hover:ring-indigo-700 group-hover:scale-110 group-hover:shadow-md"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{review.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{review.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};