
import React from 'react';
import { useData } from '../context/DataContext';
import PageHeader from '../components/PageHeader';
import PieChartComponent from '../components/charts/PieChartComponent';
import BarChartComponent from '../components/charts/BarChartComponent';
import LineChartComponent from '../components/charts/LineChartComponent';

const StatisticsPage: React.FC = () => {
  const data = useData();
  const { statistics } = data;

  return (
    <div className="space-y-12">
      <PageHeader
        title="Agricultural Statistics"
        subtitle="A visual overview of Jordan's agricultural landscape, from land use to water consumption and crop production trends."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md">
          <PieChartComponent data={statistics.agricultureTypes} title="Distribution of Agricultural Land Use" />
        </div>
        <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md">
          <BarChartComponent data={statistics.waterConsumption} title="Water Use by Irrigation Type (%)" label="Percentage of Water" />
        </div>
      </div>
      <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md">
        <LineChartComponent data={statistics.cropProduction} title="Key Crop Production Trends (2018-2022)" />
      </div>
    </div>
  );
};

export default StatisticsPage;
