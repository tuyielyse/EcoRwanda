/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Bell, AlertTriangle, User, Menu } from 'lucide-react';

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 w-full bg-surface/95 backdrop-blur-md border-b border-outline-variant">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="font-display font-semibold text-xl text-on-surface">{title}</h2>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex relative mr-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search districts, alerts..." 
            className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-full text-on-surface text-sm focus:ring-2 focus:ring-primary outline-none w-64"
          />
        </div>

        <button aria-label="notifications" className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors rounded-full">
          <Bell className="w-5 h-5" />
        </button>
        <button aria-label="warning" className="p-2 text-on-surface-variant hover:text-danger-red hover:bg-surface-container-high transition-colors rounded-full">
          <AlertTriangle className="w-5 h-5" />
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2 hidden sm:block"></div>
        <button aria-label="account" className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors rounded-full">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
