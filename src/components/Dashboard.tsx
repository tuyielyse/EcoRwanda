/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Thermometer, 
  Droplets, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  Navigation,
  Wind,
  Mountain,
  MoreHorizontal,
  Bell,
  ArrowRight,
  Map as MapIcon,
  GraduationCap,
  Footprints,
  PlusCircle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const data = [
  { day: '1', rainfall: 20, temp: 22 },
  { day: '5', rainfall: 35, temp: 23 },
  { day: '10', rainfall: 25, temp: 25 },
  { day: '15', rainfall: 45, temp: 24 },
  { day: '20', rainfall: 30, temp: 26 },
  { day: '25', rainfall: 55, temp: 23 },
  { day: '30', rainfall: 45, temp: 25 },
];

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 pb-10"
    >
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-surface shadow-sm border border-outline-variant flex flex-col lg:flex-row min-h-[450px]">
        <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center z-10 bg-surface/90 lg:bg-surface backdrop-blur-sm lg:backdrop-blur-none">
          <span className="inline-block px-3 py-1 bg-surface-container-highest text-primary font-bold text-[10px] rounded-full mb-4 uppercase tracking-widest w-max shadow-sm">
            National Dashboard
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-on-surface mb-6 leading-tight">
            Empowering Rwanda Through Climate Data
          </h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
            Monitor environmental shifts, receive early disaster warnings, and access data-driven insights to adapt our agricultural practices to a changing climate.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-on-primary font-bold px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 flex items-center space-x-2 transform active:scale-95">
              <span>Explore Interactive Map</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary/5 font-bold px-8 py-3.5 rounded-xl transition-all duration-200">
              View Latest Reports
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 h-64 lg:h-auto absolute lg:relative inset-0 lg:inset-auto z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200')` 
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface lg:from-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent lg:hidden" />
        </div>
      </section>

      {/* Overview Stats (Row 2 from screenshot 4) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3 bg-surface rounded-2xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">National Avg Temp</p>
              <h3 className="text-2xl font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">24.5°C</h3>
            </div>
            <div className="p-3 bg-error-container/30 rounded-2xl text-danger-red">
              <Thermometer className="w-6 h-6 fill-current" />
            </div>
          </div>
          <div className="flex items-center text-danger-red font-bold text-xs">
            <TrendingUp className="w-4 h-4 mr-1.1" />
            <span>+1.2°C vs last month</span>
          </div>
        </div>

        <div className="md:col-span-3 bg-surface rounded-2xl p-6 border border-outline-variant shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Avg Monthly Rainfall</p>
              <h3 className="text-2xl font-bold text-on-surface mt-1 group-hover:text-secondary transition-colors">112 mm</h3>
            </div>
            <div className="p-3 bg-secondary-container/20 rounded-2xl text-secondary">
              <Droplets className="w-6 h-6 fill-current" />
            </div>
          </div>
          <div className="flex items-center text-primary font-bold text-xs text-primary">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span>-15mm vs average</span>
          </div>
        </div>

        <div className="md:col-span-3 bg-surface hover:bg-surface-container-low transition-all rounded-2xl p-6 border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer">
          <div className="p-4 bg-primary-container/10 rounded-full text-primary mb-3 group-hover:scale-110 group-hover:bg-primary-container/20 transition-all">
            <Footprints className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-lg text-on-surface">Agri-Data</h4>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Soil & Crop insights</p>
        </div>

        <div className="md:col-span-3 bg-surface hover:bg-surface-container-low transition-all rounded-2xl p-6 border border-outline-variant shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer">
          <div className="p-4 bg-tertiary-container/10 rounded-full text-tertiary mb-3 group-hover:scale-110 group-hover:bg-tertiary-container/20 transition-all">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-lg text-on-surface">Education</h4>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Adaptation guides</p>
        </div>
      </div>

      {/* National Overview Section (Screenshot 3) */}
      <div className="pt-10 space-y-8">
        <div>
          <h2 className="font-display text-4xl font-bold text-on-background">National Overview</h2>
          <p className="text-on-surface-variant mt-1">Detailed climate trends and analysis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-8 bg-surface rounded-2xl border border-outline-variant shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-xl text-on-surface">Climate Trends (30 Days)</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-flood-risk shadow-sm" />
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Rainfall</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-danger-red shadow-sm" />
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Temp</span>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[350px]">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRain" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#DC2626" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#bdcaba" opacity={0.2} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#3e4a3d', fontSize: 12, fontWeight: 500}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#3e4a3d', fontSize: 12, fontWeight: 500}} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #bdcaba', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="rainfall" stroke="#0EA5E9" fillOpacity={1} fill="url(#colorRain)" strokeWidth={3} />
                  <Area type="monotone" dataKey="temp" stroke="#DC2626" fillOpacity={1} fill="url(#colorTemp)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 bg-surface rounded-2xl border border-outline-variant shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl text-on-surface">District Risk Analysis</h3>
              <MoreHorizontal className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
            </div>
            <div className="flex-1 space-y-4">
              {[
                { district: 'Musanze', risk: 'Flood Risk', level: 'High', color: 'bg-danger-red', icon: Navigation },
                { district: 'Bugesera', risk: 'Drought Risk', level: 'Elevated', color: 'bg-earth-brown', icon: Wind },
                { district: 'Nyabihu', risk: 'Landslide', level: 'Monitor', color: 'bg-primary', icon: Mountain },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2.5 rounded-xl shadow-sm text-white", item.color)}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-on-surface">{item.district}</h4>
                      <p className="text-xs text-on-surface-variant font-semibold">{item.risk}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border",
                    item.level === 'High' ? "bg-danger-red/10 text-danger-red border-danger-red/20" :
                    item.level === 'Elevated' ? "bg-earth-brown/10 text-earth-brown border-earth-brown/20" :
                    "bg-primary/10 text-primary border-primary/20"
                  )}>
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Screenshot 4) */}
      <section className="bg-surface rounded-3xl border border-outline-variant shadow-sm overflow-hidden flex flex-col lg:flex-row">
        <div className="p-8 lg:p-10 lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-outline-variant">
          <h3 className="font-display text-3xl font-bold text-on-surface mb-4">Live Climate Map</h3>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Monitor real-time environmental data across all 30 districts. View active alerts, temperature gradients, and localized rainfall predictions.
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex items-center p-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="w-3 h-3 rounded-full bg-danger-red mr-4 shadow-sm" />
              <span className="font-bold text-sm text-on-surface">High Risk Areas (2)</span>
            </div>
            <div className="flex items-center p-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="w-3 h-3 rounded-full bg-earth-brown mr-4 shadow-sm" />
              <span className="font-bold text-sm text-on-surface">Drought Watch (1)</span>
            </div>
            <div className="flex items-center p-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="w-3 h-3 rounded-full bg-primary mr-4 shadow-sm" />
              <span className="font-bold text-sm text-on-surface">Stable Regions (27)</span>
            </div>
          </div>
          <button className="w-full bg-surface-container border border-outline text-on-surface hover:bg-surface-container-high hover:shadow-md font-bold px-6 py-3 rounded-xl transition-all duration-200 flex justify-center items-center space-x-3 transform active:scale-95">
            <MapIcon className="w-5 h-5 text-primary" />
            <span>Open Full Map</span>
          </button>
        </div>
        <div className="lg:w-2/3 h-[450px] lg:h-auto bg-surface-dim relative">
          <div 
            className="w-full h-full bg-cover bg-center grayscale-[0.2]" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1542601039-2a946e96996d?auto=format&fit=crop&q=80&w=1200')` 
            }} 
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          
          <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-outline-variant flex flex-col space-y-2">
            <button className="p-2 hover:bg-surface-container-high rounded-xl text-on-surface-variant transition-colors"><PlusCircle className="w-5 h-5" /></button>
            <div className="h-px bg-outline-variant mx-2" />
            <button className="p-2 hover:bg-surface-container-high rounded-xl text-on-surface-variant transition-colors"><TrendingDown className="w-5 h-5" /></button>
          </div>

          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          >
            <div className="bg-danger-red text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-2xl mb-2 animate-bounce uppercase tracking-widest">Alert</div>
            <div className="relative">
              <div className="absolute inset-0 bg-danger-red animate-ping rounded-full opacity-25" />
              <div className="relative w-10 h-10 bg-danger-red text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-2xl border border-outline-variant">
              <p className="text-xs font-bold text-on-surface">Musanze Risk Zone</p>
              <p className="text-[10px] text-danger-red font-bold mt-0.5">Heavy Rain Expected</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

