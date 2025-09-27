
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useTheme } from '../../context/ThemeContext';
import { StatisticChartData } from '../../types';

interface BarChartProps {
  data: StatisticChartData[];
  title: string;
  label: string;
}

const BarChartComponent: React.FC<BarChartProps> = ({ data, title, label }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'bar', number[], string> | null>(null);
  const { theme } = useTheme();
  
  const textColor = theme === 'dark' ? '#F9FAFB' : '#1F2937';
  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';


  useEffect(() => {
    if (chartRef.current) {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const ctx = chartRef.current.getContext('2d');
        if(ctx) {
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(d => d.name),
                    datasets: [{
                        label: label,
                        data: data.map(d => d.value),
                        backgroundColor: '#3A7D44',
                        borderColor: '#1E3859',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
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
                            beginAtZero: true,
                            ticks: { color: textColor },
                            grid: { color: gridColor }
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
  }, [data, title, label, theme, textColor, gridColor]);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChartComponent;
