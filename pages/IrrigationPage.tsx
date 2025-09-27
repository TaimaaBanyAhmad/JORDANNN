
import React from 'react';
import { useData } from '../context/DataContext';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const IrrigationPage: React.FC = () => {
  const data = useData();
  const { irrigation } = data;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Irrigation Technologies"
        subtitle="In a water-scarce nation, efficient irrigation is not just a technique—it's a lifeline. Explore the methods Jordan employs to maximize every drop."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {irrigation.map(method => (
          <Card
            key={method.id}
            title={method.name}
            description={method.description}
            image={method.image}
          />
        ))}
      </div>
    </div>
  );
};

export default IrrigationPage;
