import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { Plan } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$0',
    period: '/mo',
    features: ['5 team members', 'Basic tasks', '1GB storage', 'Community support'],
    isRecommended: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: ['Unlimited members', 'Analytics', '100GB storage', 'Priority support', 'Custom workflows', 'Slack integration'],
    isRecommended: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited everything', 'SSO Security', 'Dedicated manager', '24/7 Phone support', 'Custom contracts', 'On-premise'],
    isRecommended: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Simple pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
              Start for free, upgrade when you scale.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <RevealOnScroll key={plan.id} delay={index * 100} className="h-full">
              <div 
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 h-full group ${
                  plan.isRecommended 
                    ? 'bg-indigo-600 dark:bg-indigo-600 text-white shadow-xl scale-105 z-10 hover:scale-110 hover:shadow-2xl' 
                    : 'bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold ${plan.isRecommended ? 'text-indigo-100' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className={`text-4xl font-bold ${plan.isRecommended ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.price}</span>
                    {plan.period && <span className={`ml-1 text-sm font-medium ${plan.isRecommended ? 'text-indigo-200' : 'text-slate-500'}`}>{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/feature">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 mr-3 ${plan.isRecommended ? 'text-indigo-200' : 'text-indigo-500'} transition-all duration-200 group-hover/feature:scale-110 group-hover/feature:rotate-12`} />
                      <span className={`text-sm ${plan.isRecommended ? 'text-indigo-50' : 'text-slate-600 dark:text-slate-400'} transition-colors duration-200`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.isRecommended ? 'secondary' : 'primary'}
                  className={`w-full justify-center ${plan.isRecommended ? 'bg-white text-indigo-600 hover:bg-indigo-50 border-none' : ''}`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};