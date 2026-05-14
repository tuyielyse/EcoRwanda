/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  FileText, 
  Send, 
  CheckCircle2, 
  History,
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { DISTRICTS } from '../constants';

export default function Reporting() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Flood',
    district: 'Nyabihu',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-10"
    >
      <div>
        <h1 className="font-display text-4xl font-bold text-on-background">Environmental Reporting</h1>
        <p className="text-on-surface-variant mt-1">Help protect Rwanda by reporting environmental incidents and climate risks</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="bg-surface rounded-3xl border border-outline-variant shadow-sm p-8">
            <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-primary" /> Report a New Incident
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Incident Type</label>
                  <select 
                    className="w-full bg-surface-container-high border border-outline-variant rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option>Flood</option>
                    <option>Landslide</option>
                    <option>Illegal Deforestation</option>
                    <option>Soil Erosion</option>
                    <option>Water Pollution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">District</label>
                  <select 
                    className="w-full bg-surface-container-high border border-outline-variant rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                  >
                    {DISTRICTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Describe the incident in detail..."
                  className="w-full bg-surface-container-high border border-outline-variant rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-3 p-4 bg-surface-container-high border border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:border-primary transition-all">
                  <Camera className="w-5 h-5" />
                  <span className="text-sm font-bold">Take Photo</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-3 p-4 bg-surface-container-high border border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:border-primary transition-all">
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-sm font-bold">Upload Gallery</span>
                </button>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-on-primary p-4 rounded-xl font-bold shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Submit Report
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-3 text-primary"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm font-bold">Thank you! Your report has been submitted for validation by an Environmental Officer.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface rounded-3xl border border-outline-variant shadow-sm p-6">
            <h3 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
              <History className="w-5 h-5 text-on-surface-variant" /> Recent Community Reports
            </h3>
            <div className="space-y-4">
              {[
                { type: 'Soil Erosion', location: 'Nyabihu Hills', time: '1h ago', status: 'Verifying' },
                { type: 'Minor Flooding', location: 'Rubavu Beach St', time: '3h ago', status: 'Validated' },
                { type: 'Forest Clearance', location: 'Gishwati Buffer', time: '12h ago', status: 'Investigating' },
              ].map((report, idx) => (
                <div key={idx} className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">{report.type}</h4>
                    <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {report.location} • {report.time}
                    </p>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full tracking-tighter uppercase",
                    report.status === 'Validated' ? "bg-primary/10 text-primary" : "bg-earth-brown/10 text-earth-brown"
                  )}>
                    {report.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-bold text-primary hover:underline">
              View All Recent Activity
            </button>
          </div>

          <div className="bg-primary/5 rounded-3xl p-6 border border-primary/20">
            <h3 className="font-bold text-deep-green mb-3">Why Report?</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Every report helps our AI system and Environmental Officers build a more accurate map of climate risks in Rwanda. Community engagement is the backbone of our disaster prevention strategy.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
