/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutDashboard, TrendingUp, Bell, FileText, Footprints, GraduationCap, Settings, HelpCircle, AlertCircle } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'predictions', label: 'Predictions', icon: 'TrendingUp' },
  { id: 'alerts', label: 'Alerts', icon: 'Bell' },
  { id: 'reporting', label: 'Reporting', icon: 'FileText' },
  { id: 'agriculture', label: 'Agriculture', icon: 'Footprints' },
  { id: 'education', label: 'Education', icon: 'GraduationCap' },
];

export const DISTRICTS = ['Nyabihu', 'Rubavu', 'Musanze', 'Bugesera', 'Kirehe'];

export const CROP_RECOMMENDATIONS = {
  'drought-resistant': [
    {
      name: 'Cassava',
      description: 'High resilience to expected dry spells.',
      plantingPeriod: 'Planting: Nov-Dec',
      imageUrl: 'https://images.unsplash.com/photo-1594968973184-9140fa307769?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Sorghum',
      description: 'Deep root system suitable for current soil moisture.',
      plantingPeriod: 'Planting: Dec-Jan',
      imageUrl: 'https://images.unsplash.com/photo-1622359409163-1f1981cd3d95?auto=format&fit=crop&q=80&w=200',
    }
  ],
  'rain-suitable': [
    {
      name: 'Irish Potatoes',
      description: 'High yield potential if moisture is managed.',
      plantingPeriod: 'Irrigation Req: Med',
      imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Climbing Beans',
      description: 'Monitor carefully for excessive dry heat.',
      plantingPeriod: 'Irrigation Req: High',
      imageUrl: 'https://images.unsplash.com/photo-1506484334402-40ff226fd931?auto=format&fit=crop&q=80&w=200',
    }
  ]
};

export const VIDEO_RESOURCES = [
  {
    title: 'Understanding Topsoil Erosion Patterns',
    duration: '12:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    description: 'Learn to identify the early signs of topsoil loss and implement simple terracing techniques.'
  },
  {
    title: 'Water Harvesting for Dry Seasons',
    duration: '08:20',
    thumbnailUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
    description: 'Practical guide to building small-scale rainwater catchment systems for local farms.'
  },
  {
    title: 'Climate-Smart Seed Selection',
    duration: '15:10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    description: 'How to choose drought-resistant crop varieties to secure yield during shifting weather patterns.'
  }
];
