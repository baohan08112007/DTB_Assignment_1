import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, BarChart, Bar, Legend, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// Custom Tooltip for enhanced interactivity
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl">
        <p className="font-bold text-gray-900 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm font-medium text-gray-600 capitalize">
              {entry.name}:
            </span>
            <span className="text-sm font-bold text-gray-900">
              {entry.value}{entry.dataKey === 'gmv' ? 'M' : '%'}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const InteractiveAreaChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fe5621" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#fe5621" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
        <RechartsTooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="gmv"
          name="Market Size"
          stroke="#fe5621"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorGmv)"
          activeDot={{ r: 6, strokeWidth: 0, fill: '#fe5621' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const InteractiveBarChart = ({ data }) => {
  const [activeSeries, setActiveSeries] = useState({ shopee: true, coolmate: true });

  const toggleSeries = (dataKey) => {
    setActiveSeries(prev => ({ ...prev, [dataKey]: !prev[dataKey] }));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => toggleSeries('shopee')}
          className={`px-4 py-2 text-xs font-bold rounded-full transition-all border ${activeSeries.shopee ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100'}`}
        >
          Shopee Marketplace
        </button>
        <button
          onClick={() => toggleSeries('coolmate')}
          className={`px-4 py-2 text-xs font-bold rounded-full transition-all border ${activeSeries.coolmate ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100'}`}
        >
          Coolmate DTC
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 5 }} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
          <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
          <RechartsTooltip cursor={{ fill: '#ffffff05' }} content={<CustomTooltip />} />
          {activeSeries.shopee && (
            <Bar dataKey="shopee" name="Shopee" fill="#fe5621" radius={[4, 4, 0, 0]} maxBarSize={40} />
          )}
          {activeSeries.coolmate && (
            <Bar dataKey="coolmate" name="Coolmate" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const InteractiveRadarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#ffffff15" />
        <PolarAngleAxis dataKey="metric" tick={{ fill: '#9ca3af', fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <RechartsTooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
        <Radar
          name="Shopee"
          dataKey="shopee"
          stroke="#fe5621"
          fill="#fe5621"
          fillOpacity={0.3}
        />
        <Radar
          name="Coolmate DTC"
          dataKey="coolmate"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.3}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
