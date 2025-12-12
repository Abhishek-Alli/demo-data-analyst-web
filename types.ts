import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  type: 'report' | 'dashboard' | 'other';
  fileUrl?: string; // Blob URL for uploaded files
  fileName?: string;
  date: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  amt: number;
}