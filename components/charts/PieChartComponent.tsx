
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useTheme } from '../../context/ThemeContext';
import { StatisticChartData } from '../../types';

interface PieChartProps {
  data: StatisticChartData[];
  title: string;
}

const PieChartComponent: React.FC<PieChartProps> = ({ data, title }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'pie', number[], string> | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: data.map(d => d.name),
            datasets: [{
              data: data.map(d => d.value),
              backgroundColor: data.map(d => d.color || '#000'),
              borderColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
              borderWidth: 2,
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                    color: theme === 'dark' ? '#F9FAFB' : '#1F2937',
                    font: { size: 14 }
                }
              },
              title: {
                display: true,
                text: title,
                color: theme === 'dark' ? '#F9FAFB' : '#1F2937',
                font: { size: 18 }
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, title, theme]);

  return <canvas ref={chartRef}></canvas>;
};

export default PieChartComponent;
