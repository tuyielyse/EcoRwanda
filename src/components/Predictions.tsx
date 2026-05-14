/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CloudRain, 
  ThermometerSun, 
  Wind, 
  TrendingUp, 
  Calendar,
  AlertCircle,
  BarChart3,
  Waves
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const seasonalData = [
  { month: 'Jun', rain: 120, temp: 24 },
  { month: 'Jul', rain: 80, temp: 26 },
  { month: 'Aug', rain: 60, temp: 27 },
  { month: 'Sep', rain: 150, temp: 25 },
  { month: 'Oct', rain: 200, temp: 23 },
  { month: 'Nov', rain: 180, temp: 22 },
];

export default function Predictions() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-10"
    >
      <div>
        <h1 className="font-display text-4xl font-bold text-on-background">Climate Predictions</h1>
        <p className="text-on-surface-variant mt-1">AI-powered long-term environmental forecasting for Rwanda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm border-l-4 border-l-flood-risk">
          <div className="flex items-center gap-3 mb-4">
            <CloudRain className="w-6 h-6 text-flood-risk" />
            <h3 className="font-bold text-on-surface">Rainfall Outlook</h3>
          </div>
          <p className="text-2xl font-bold text-on-surface">+15%</p>
          <p className="text-xs text-on-surface-variant mt-1">Expected above average for Sept-Oct</p>
        </div>
        
        <div className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm border-l-4 border-l-danger-red">
          <div className="flex items-center gap-3 mb-4">
            <ThermometerSun className="w-6 h-6 text-danger-red" />
            <h3 className="font-bold text-on-surface">Temperature Trend</h3>
          </div>
          <p className="text-2xl font-bold text-on-surface">+2.1°C</p>
          <p className="text-xs text-on-surface-variant mt-1">Projected increase over next 6 months</p>
        </div>

        <div className="bg-surface p-6 rounded-2xl border border-outline-variant shadow-sm border-l-4 border-l-earth-brown">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-earth-brown" />
            <h3 className="font-bold text-on-surface">Soil Moisture</h3>
          </div>
          <p className="text-2xl font-bold text-on-surface">Critical</p>
          <p className="text-xs text-on-surface-variant mt-1">Eastern province alert for July-Aug</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-xl text-on-surface flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" /> Seasonal Rainfall Forecast
            </h3>
          </div>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={seasonalData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="rain" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface rounded-2xl border border-outline-variant shadow-sm p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-xl text-on-surface flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-danger-red" /> Temperature Projection
            </h3>
          </div>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={seasonalData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#DC2626" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary text-on-primary rounded-xl">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-deep-green">AI Adaptation Strategy</h3>
            <p className="text-on-surface-variant mt-2 max-w-3xl leading-relaxed">
              Based on projected rainfall increases in September, the system suggests prioritizing terracing in the Northern Province to prevent soil erosion. For the Eastern Province, early investment in water harvesting systems is recommended ahead of the dry July-August period.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
