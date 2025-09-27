
import React from 'react';
import { useData } from '../context/DataContext';
import FilterableListPage from './FilterableListPage';

const CropsPage: React.FC = () => {
  const data = useData();
  const { crops } = data;

  const filterCategories = [
    { name: 'type', options: ['fruit', 'vegetable', 'cereal'] },
    { name: 'rarity', options: ['common', 'rare'] }
  ];

  return (
    <FilterableListPage
      title="Strategic & Common Crops"
      subtitle="Discover the essential crops that form the backbone of Jordan's agriculture and food supply, from staple grains to valuable exports."
      items={crops}
      filterCategories={filterCategories}
    />
  );
};

export default CropsPage;
