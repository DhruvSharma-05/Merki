import React from 'react';
import { Zap, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 group/logo cursor-default">
              <div className="bg-indigo-600 p-1.5 rounded-lg mr-2 transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:rotate-12 group-hover/logo:shadow-lg group-hover/logo:shadow-indigo-500/50">
                <Zap className="h-4 w-4 text-white transition-transform duration-300 group-hover/logo:scale-110" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-200 group-hover/logo:text-indigo-600 dark:group-hover/logo:text-indigo-400">Merki</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Less friction. More focus. The future of work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:rotate-3">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:rotate-3">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:rotate-3">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Features</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Integrations</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">About</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Careers</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Privacy</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-all duration-200 inline-block hover:translate-x-1">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Merki Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};