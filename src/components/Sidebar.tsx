/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Bell, 
  FileText, 
  Sprout, 
  GraduationCap, 
  AlertCircle, 
  Settings, 
  HelpCircle,
  PlusCircle,
  Leaf
} from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';

const iconMap: Record<string, any> = {
  LayoutDashboard,
  TrendingUp,
  Bell,
  FileText,
  Footprints: Sprout, // Using Sprout as Footprints alternative
  GraduationCap
};

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant shadow-sm z-40">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-deep-green" />
          <div>
            <h1 className="font-headline-md text-deep-green font-bold tracking-tight">EcoShield</h1>
            <p className="text-xs text-on-surface-variant">Rwanda Climate Monitor</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left",
                isActive 
                  ? "bg-primary-container text-on-primary-container font-semibold" 
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 font-bold text-sm">
          <PlusCircle className="w-5 h-5" />
          Report Incident
        </button>

        <div className="mt-4 pt-4 border-t border-outline-variant space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 rounded-lg">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 rounded-lg">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Support</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
