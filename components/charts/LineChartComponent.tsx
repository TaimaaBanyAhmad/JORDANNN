
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useTheme } from '../../context/ThemeContext';
import { CropProductionData } from '../../types';

interface LineChartProps {
  data: CropProductionData[];
  title: string;
}

const LineChartComponent: React.FC<LineChartProps> = ({ data, title }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'line', number[], number> | null>(null);
  const { theme } = useTheme();

  const textColor = theme === 'dark' ? '#F9FAFB' : '#1F2937';
  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const labels = data.map(d => d.year);
        const datasets = Object.keys(data[0] || {}).filter(key => key !== 'year').map((crop, index) => {
            const colors = ['#3A7D44', '#A67C52', '#1E3859'];
            return {
                label: crop,
                data: data.map(d => d[crop]),
                fill: false,
                borderColor: colors[index % colors.length],
                tension: 0.1
            }
        });

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: datasets
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: { color: textColor, font: {size: 14} }
              },
              title: {
                display: true,
                text: title,
                color: textColor,
                font: { size: 18 }
              }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: { color: textColor },
                    grid: { color: gridColor },
                    title: { display: true, text: 'Production (in 1000 tons)', color: textColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            }
          }
        });
      }
    }
    
    return () => {
        if(chartInstance.current){
            chartInstance.current.destroy();
        }
    }
  }, [data, title, theme, textColor, gridColor]);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChartComponent;
