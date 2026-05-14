/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Bell, 
  AlertTriangle, 
  Info, 
  ShieldAlert, 
  MapPin, 
  Clock, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const ALERTS = [
  {
    id: '1',
    type: 'error',
    title: 'Heavy Rainfall Warning',
    district: 'Musanze, Burera',
    time: '2 hours ago',
    desc: 'High risk of localized flooding and landslides. Communities near steep slopes should seek safer ground.',
    status: 'Active'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Drought Advisory',
    district: 'Bugesera, Kirehe',
    time: '5 hours ago',
    desc: 'Prolonged dry spell expected. Farmers are advised to initiate irrigation protocols and conserve water.',
    status: 'Active'
  },
  {
    id: '3',
    type: 'info',
    title: 'Temperature Spike',
    district: 'Kigali City',
    time: '1 day ago',
    desc: 'Above average temperatures projected for the next 48 hours. Stay hydrated and avoid outdoor work during mid-day.',
    status: 'Ongoing'
  },
  {
    id: '4',
    type: 'warning',
    title: 'Wind Speed Alert',
    district: 'Rubavu',
    time: '1 day ago',
    desc: 'Strong winds expected near Lake Kivu. Fishers and lake-side residents should exercise extreme caution.',
    status: 'Active'
  }
];

export default function Alerts() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-on-background">Active Disaster Alerts</h1>
          <p className="text-on-surface-variant mt-1">Critical climate safety information and warnings</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-xl text-sm font-bold text-on-surface hover:bg-surface-container-high transition-all">
          <Filter className="w-4 h-4" />
          Filter Alerts
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {ALERTS.map((alert) => (
          <motion.div 
            key={alert.id}
            whileHover={{ x: 4 }}
            className={cn(
              "p-6 rounded-2xl border bg-surface shadow-sm flex flex-col md:flex-row md:items-center gap-6 transition-all cursor-pointer",
              alert.type === 'error' ? "border-danger-red/30 border-l-4 border-l-danger-red" :
              alert.type === 'warning' ? "border-earth-brown/30 border-l-4 border-l-earth-brown" :
              "border-secondary/30 border-l-4 border-l-secondary"
            )}
          >
            <div className={cn(
              "p-4 rounded-2xl shrink-0",
              alert.type === 'error' ? "bg-error-container text-danger-red" :
              alert.type === 'warning' ? "bg-earth-brown/10 text-earth-brown" :
              "bg-secondary/10 text-secondary"
            )}>
              {alert.type === 'error' ? <ShieldAlert className="w-8 h-8" /> :
               alert.type === 'warning' ? <AlertTriangle className="w-8 h-8" /> :
               <Info className="w-8 h-8" />}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                <h3 className="text-xl font-bold text-on-surface">{alert.title}</h3>
                <span className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest",
                  alert.status === 'Active' ? "bg-danger-red text-white" : "bg-on-surface-variant text-white"
                )}>
                  {alert.status}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                {alert.desc}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs font-bold text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {alert.district}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {alert.time}
                </div>
              </div>
            </div>

            <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors flex md:hidden items-center text-primary font-bold text-sm">
              View Details <ChevronRight className="w-5 h-5 ml-1" />
            </button>
            <ChevronRight className="hidden md:block w-6 h-6 text-outline-variant" />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-surface-container-low rounded-3xl border border-outline-variant text-center">
        <h3 className="text-xl font-bold text-on-surface">Stay Informed</h3>
        <p className="text-on-surface-variant mt-2 max-w-md mx-auto">
          Sign up for localized SMS alerts to receive information directly on your phone when risks are detected in your district.
        </p>
        <button className="mt-6 bg-primary text-on-primary px-8 py-3 rounded-xl font-bold shadow-md hover:bg-primary-container transition-all">
          Enable SMS Notifications
        </button>
      </div>
    </motion.div>
  );
}
