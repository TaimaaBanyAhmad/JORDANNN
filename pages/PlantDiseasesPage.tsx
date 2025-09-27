
import React from 'react';
import { useData } from '../context/DataContext';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const PlantDiseasesPage: React.FC = () => {
  const data = useData();
  const { plantDiseases } = data;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Common Plant Diseases & Pests"
        subtitle="Protecting crops is as important as growing them. Here are some of the most significant threats to agricultural output in Jordan."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plantDiseases.map(disease => (
          <Card
            key={disease.id}
            title={disease.name}
            description={disease.description}
            image={disease.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PlantDiseasesPage;
