/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface ClimateStat {
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  icon: any;
  color: string;
  bgColor: string;
}

export interface Alert {
  id: string;
  type: 'warning' | 'info' | 'error';
  title: string;
  description: string;
}

export interface RiskItem {
  district: string;
  risk: string;
  level: 'High' | 'Elevated' | 'Monitor';
  icon: any;
}

export interface CropRecommendation {
  name: string;
  description: string;
  plantingPeriod: string;
  imageUrl: string;
  tag?: string;
}

export interface VideoResource {
  title: string;
  duration: string;
  thumbnailUrl: string;
  description: string;
}
