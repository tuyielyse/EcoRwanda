/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Clock, 
  Leaf, 
  Lightbulb, 
  Sprout, 
  Droplets, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { VIDEO_RESOURCES } from '../constants';
import { cn } from '../lib/utils';

export default function Education() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <div>
        <h1 className="font-display text-4xl font-bold text-on-background">Education Center</h1>
        <p className="text-lg text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
          Equipping Rwanda with climate knowledge, sustainable agriculture, and conservation practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Article */}
        <article className="col-span-1 md:col-span-8 group cursor-pointer">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Nyungwe Forest" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded-full mb-4 uppercase tracking-widest">Featured</span>
              <h3 className="text-3xl font-bold text-white mb-3 leading-tight group-hover:text-primary-container transition-colors">
                The Root of Resilience: Community Reforestation in Nyungwe
              </h3>
              <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" /> 8 min read
                </span>
                <span className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-primary" /> Conservation
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Impact Tracker */}
        <div className="col-span-1 md:col-span-4 bg-surface rounded-2xl border border-outline-variant shadow-sm p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-on-surface flex items-center gap-2">
              <Sprout className="w-6 h-6 text-earth-brown" /> Impact Tracker
            </h3>
            <div className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors">
               <ArrowRight className="w-5 h-5 text-on-surface-variant rotate-[-45deg]" />
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-bold text-earth-brown tracking-tighter"
            >
              24,500
            </motion.span>
            <span className="text-on-surface-variant font-medium mt-2">Trees planted this month</span>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-3">
                <span>Monthly Goal: 30,000</span>
                <span className="text-earth-brown">81%</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '81%' }}
                  className="bg-earth-brown h-full rounded-full" 
                />
              </div>
            </div>
            <button className="w-full py-3.5 border-2 border-earth-brown text-earth-brown rounded-xl font-bold hover:bg-earth-brown hover:text-white transition-all transform active:scale-[0.98]">
              Log My Planting
            </button>
          </div>
        </div>

        {/* Video Resources Section */}
        <div className="col-span-1 md:col-span-12 mt-4">
          <div className="flex items-center justify-between border-b border-outline-variant pb-4 mb-8">
            <h3 className="text-2xl font-bold text-on-surface font-display">Video Resources</h3>
            <a href="#" className="text-sm font-bold text-primary hover:underline flex items-center gap-1.5 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEO_RESOURCES.map((video, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md mb-4 bg-surface-container">
                  <img src={video.thumbnailUrl} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt={video.title} />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all">
                      <Play className="w-6 h-6 text-primary fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider backdrop-blur-sm">
                    {video.duration}
                  </div>
                </div>
                <h4 className="font-bold text-lg text-on-surface leading-tight hover:text-primary transition-colors mb-2">
                  {video.title}
                </h4>
                <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Climate Tips */}
        <div className="col-span-1 md:col-span-12 mt-6 p-8 bg-surface-container-low rounded-2xl border border-outline-variant shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary-container text-on-primary-container rounded-2xl shadow-sm">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-on-surface font-display">Daily Climate Tips</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Start Composting', desc: 'Reduce methane emissions from landfills by composting organic waste at home. It also creates rich soil for gardens.', icon: Sprout, color: 'text-earth-brown' },
              { title: 'Mulch Your Gardens', desc: 'Applying a layer of mulch helps retain soil moisture, reducing the need for frequent watering during dry spells.', icon: Droplets, color: 'text-flood-risk' },
              { title: 'Plant Native Species', desc: 'Native plants require less water and fertilizer, and they provide crucial habitats for local pollinators.', icon: Leaf, color: 'text-deep-green' },
            ].map((tip, idx) => (
              <div key={idx} className="p-6 bg-surface rounded-xl border border-outline-variant/30 flex gap-4 transition-all hover:shadow-md hover:border-primary/20">
                <tip.icon className={cn("w-6 h-6 shrink-0 mt-1", tip.color)} />
                <div>
                  <h5 className="font-bold text-on-surface mb-2 font-display">{tip.title}</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System User Guide & Roles */}
      <div className="mt-12 space-y-8">
        <div className="border-b border-outline-variant pb-4">
          <h2 className="text-3xl font-bold text-on-surface font-display">System Guide: User Roles</h2>
          <p className="text-on-surface-variant mt-2">Understanding permissions and purposes of various stakeholders in EcoShield Rwanda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              role: 'Citizen User', 
              purpose: 'Public users receiving climate info and reporting incidents.',
              allowed: ['View climate alerts', 'Report incidents', 'Access education', 'View maps'],
              icon: '👤'
            },
            { 
              role: 'Farmer User', 
              purpose: 'Receives agriculture and climate adaptation support.',
              allowed: ['Everything Citizens do', 'Crop recommendations', 'Farming predictions', 'Seasonal calendar'],
              icon: '🚜'
            },
            { 
              role: 'Environmental Officer', 
              purpose: 'District monitoring and validating community reports.',
              allowed: ['Review reports', 'Verify incidents', 'Post alerts', 'Update district data'],
              icon: '👮'
            },
            { 
              role: 'Agronomist', 
              purpose: 'Provides expert agricultural recommendations.',
              allowed: ['Manage crop data', 'Add farming guidance', 'Update planting advice'],
              icon: '🔬'
            },
            { 
              role: 'Researcher', 
              purpose: 'Analyzes environmental and climate data trends.',
              allowed: ['View climate stats', 'Access reports', 'Generate analytics'],
              icon: '📊'
            },
            { 
              role: 'Administrator', 
              purpose: 'Manages users and whole-platform operations.',
              allowed: ['Manage users', 'Delete content', 'Assign roles', 'Moderate all data'],
              icon: '🔑'
            }
          ].map((role, idx) => (
            <div key={idx} className="bg-surface rounded-2xl border border-outline-variant shadow-sm p-6 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform block">{role.icon}</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-1 rounded">System Role</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-2">{role.role}</h4>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed bg-surface-container-low p-3 rounded-xl border border-outline-variant/30 italic">
                "{role.purpose}"
              </p>
              
              <div className="space-y-3">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Key Permissions</p>
                <div className="flex flex-wrap gap-2">
                  {role.allowed.map((perm, pIdx) => (
                    <span key={pIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-on-surface bg-surface-container px-2.5 py-1 rounded-lg border border-outline-variant/20">
                      <CheckCircle2 className="w-3 h-3 text-primary" /> {perm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

  );
}
