
import React from 'react';
import { useData } from '../context/DataContext';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const VerticalFarmingPage: React.FC = () => {
  const data = useData();
  const { verticalFarming } = data;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Vertical Farming & Modern Agriculture"
        subtitle="The future of farming is here. Learn about soilless, controlled-environment agriculture projects that promise high yields with minimal water."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {verticalFarming.map(project => (
          <Card
            key={project.id}
            title={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalFarmingPage;
