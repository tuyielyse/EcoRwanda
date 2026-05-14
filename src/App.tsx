/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Agriculture from './components/Agriculture';
import Education from './components/Education';
import Predictions from './components/Predictions';
import Alerts from './components/Alerts';
import Reporting from './components/Reporting';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'predictions':
        return <Predictions />;
      case 'alerts':
        return <Alerts />;
      case 'reporting':
        return <Reporting />;
      case 'agriculture':
        return <Agriculture />;
      case 'education':
        return <Education />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-surface rounded-2xl border border-dashed border-outline-variant">
            <AlertCircle className="w-16 h-16 text-on-surface-variant mb-4 opacity-20" />
            <h2 className="text-2xl font-bold text-on-surface">Coming Soon</h2>
            <p className="text-on-surface-variant mt-2 max-w-md">
              The {activeTab} module is currently under development to provide you with the most accurate climate data for Rwanda.
            </p>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="mt-6 px-6 py-2 bg-primary text-on-primary rounded-lg font-bold hover:bg-primary-container transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  const currentTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Climate Monitoring Dashboard';
      case 'agriculture': return 'Smart Agriculture Recommendations';
      case 'education': return 'Education Center';
      case 'predictions': return 'Climate Predictions';
      case 'alerts': return 'Active Disaster Alerts';
      case 'reporting': return 'Environmental Reporting';
      default: return 'EcoShield Rwanda';
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen relative">
        <TopBar title={currentTitle()} />
        
        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto pb-24">
          {/* Global Alert Banner */}
          <div className="mb-8 bg-error-container border border-danger-red/20 text-on-error-container px-6 py-4 rounded-xl shadow-sm flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-danger-red rounded-lg text-white">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-on-surface">Heavy Rainfall Warning</h3>
                <p className="text-sm text-on-surface-variant mt-0.5">
                  High risk of localized flooding in the Northern Province (Musanze, Burera) over the next 48 hours.
                </p>
              </div>
            </div>
            <button className="shrink-0 bg-danger-red text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-danger-red/90 transition-all shadow-md transform active:scale-95">
              View Details
            </button>
          </div>

          {renderContent()}
        </main>

        {/* Mobile Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/95 backdrop-blur-md border-t border-outline-variant shadow-lg z-50 px-2 py-3 flex justify-around items-center">
          {[
            { id: 'dashboard', icon: 'LayoutDashboard', label: 'Home' },
            { id: 'agriculture', icon: 'Sprout', label: 'Agri' },
            { id: 'education', icon: 'GraduationCap', label: 'Learn' },
            { id: 'alerts', icon: 'Bell', label: 'Alerts' }
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all",
                  isActive ? "text-primary" : "text-on-surface-variant"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-full transition-all",
                  isActive && "bg-primary-container px-5"
                )}>
                  {/* Simplistic icon rendering for brevity, can map from lucide icons like Sidebar */}
                  <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
