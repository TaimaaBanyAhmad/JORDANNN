
import React from 'react';
import { useData } from '../context/DataContext';
import FilterableListPage from './FilterableListPage';

const PlantsPage: React.FC = () => {
  const data = useData();
  const { plants } = data;

  const filterCategories = [
    { name: 'type', options: ['herb', 'flower', 'cereal'] },
    { name: 'rarity', options: ['common', 'rare'] }
  ];

  return (
    <FilterableListPage
      title="Notable & Rare Plants"
      subtitle="Explore a collection of unique and culturally significant plants in Jordan, including medicinal herbs and promising new crops for arid climates."
      items={plants}
      filterCategories={filterCategories}
    />
  );
};

export default PlantsPage;
