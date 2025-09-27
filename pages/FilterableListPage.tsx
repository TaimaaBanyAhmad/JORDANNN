
import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { Item } from '../types';

interface FilterableListPageProps {
  title: string;
  subtitle: string;
  items: Item[];
  filterCategories: { name: string; options: string[] }[];
}

const FilterableListPage: React.FC<FilterableListPageProps> = ({ title, subtitle, items, filterCategories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});

  const handleFilterChange = (category: string, value: string) => {
    setFilters(prev => ({ ...prev, [category]: value }));
  };

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilters = Object.entries(filters).every(([category, value]) => {
        if (value === 'all') return true;
        // The key in Item needs to be dynamically accessed.
        return item[category as keyof Item] === value;
      });

      return matchesSearch && matchesFilters;
    });
  }, [items, searchTerm, filters]);

  return (
    <div className="space-y-8">
      <PageHeader title={title} subtitle={subtitle} />

      <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/3 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-light-bg dark:bg-dark-bg"
          onChange={e => setSearchTerm(e.target.value)}
        />
        {filterCategories.map(cat => (
          <select
            key={cat.name}
            className="w-full md:w-1/4 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-light-bg dark:bg-dark-bg capitalize"
            onChange={e => handleFilterChange(cat.name, e.target.value)}
          >
            <option value="all">All {cat.name}s</option>
            {cat.options.map(option => <option key={option} value={option} className="capitalize">{option}</option>)}
          </select>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
              tags={[item.type, item.rarity]}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-gray-500">No items match your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default FilterableListPage;
