/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  RefreshCw, 
  Sparkles, 
  Sun, 
  Droplets, 
  ArrowRight, 
  Thermometer,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { DISTRICTS, CROP_RECOMMENDATIONS } from '../constants';
import { cn } from '../lib/utils';

export default function Agriculture() {
  const [district, setDistrict] = useState('Nyabihu');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-on-background">Smart Agriculture Recommendations</h1>
          <p className="text-on-surface-variant mt-1">AI-driven insights for resilient farming</p>
        </div>
      </div>

      <div className="bg-surface rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-on-surface">Select Your District</h2>
          <p className="text-sm text-on-surface-variant">Get localized crop recommendations based on climate data.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select 
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="flex-1 md:w-48 bg-surface-container-high border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary outline-none"
          >
            {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-container transition-all">
            <RefreshCw className="w-5 h-5" />
            <span>Update Data</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary fill-primary/20" />
            <h2 className="text-xl font-bold text-on-surface">AI Recommendations for {district}</h2>
          </div>

          {/* Drought Resistant Section */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Sun className="w-48 h-48" />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-surface-container-highest text-earth-brown rounded-full text-xs font-bold uppercase tracking-wider">
                Drought-Resistant
              </span>
              <p className="text-xs text-on-surface-variant font-medium">Optimal for current low-rainfall forecast</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CROP_RECOMMENDATIONS['drought-resistant'].map((crop, idx) => (
                <div key={idx} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex gap-4 group cursor-pointer hover:border-primary/50 transition-all">
                  <img src={crop.imageUrl} className="w-16 h-16 rounded-lg object-cover" alt={crop.name} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-on-surface">{crop.name}</h3>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{crop.description}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold text-primary uppercase border border-primary/20 px-2 py-0.5 rounded">
                      {crop.plantingPeriod}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rain Suitable Section */}
          <div className="bg-surface rounded-2xl p-6 border border-outline-variant shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Droplets className="w-48 h-48" />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-surface-container-highest text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                Rain-Suitable
              </span>
              <p className="text-xs text-on-surface-variant font-medium">Requires supplemental irrigation currently</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {CROP_RECOMMENDATIONS['rain-suitable'].map((crop, idx) => (
                <div key={idx} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex gap-4 group cursor-pointer hover:border-secondary/50 transition-all">
                  <img src={crop.imageUrl} className="w-16 h-16 rounded-lg object-cover" alt={crop.name} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-on-surface">{crop.name}</h3>
                      <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{crop.description}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold text-secondary uppercase border border-secondary/20 px-2 py-0.5 rounded">
                      {crop.plantingPeriod}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-5 border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
              <h3 className="font-bold text-on-surface flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-earth-brown" />
                Future Climate Forecast
              </h3>
              <span className="text-xs font-bold text-on-surface-variant bg-surface px-2 py-1 rounded">Next 30 Days</span>
            </div>
            <div className="p-6 flex-1 flex flex-col space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-error-container text-danger-red mb-4 border-4 border-white shadow-sm">
                  <Sun className="w-10 h-10 fill-current" />
                </div>
                <h4 className="text-2xl font-bold text-on-surface">Prolonged Dry Spell</h4>
                <p className="text-sm text-on-surface-variant mt-1 font-medium">Expected 60% less rainfall than seasonal average.</p>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Soil Moisture Risk', value: 'High (85%)', color: 'bg-danger-red', width: '85%' },
                  { label: 'Avg Temperature', value: '26°C', color: 'bg-earth-brown', width: '70%' },
                  { label: 'Expected Rainfall', value: '45mm', color: 'bg-flood-risk', width: '25%' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                       <span className="text-on-surface-variant">{stat.label}</span>
                       <span className="text-on-surface">{stat.value}</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: stat.width }}
                        className={cn("h-full rounded-full", stat.color)} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto bg-primary/5 p-4 rounded-xl border border-primary/20 flex gap-3">
                 <Lightbulb className="w-5 h-5 text-primary shrink-0" />
                 <p className="text-xs text-on-surface-variant leading-relaxed">
                   <strong>AI Insight:</strong> Prioritize drought-resistant seed varieties and consider delaying planting of climbing beans until rain patterns stabilize.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
