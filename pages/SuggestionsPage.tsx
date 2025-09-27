import React from 'react';
import PageHeader from '../components/PageHeader';
import SuggestionBox from '../components/SuggestionBox';

const SuggestionsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Suggestion Box"
        subtitle="Have an idea or a thought about food security in Jordan? Share it below. Your perspective is valuable for shaping a sustainable future."
      />
      <SuggestionBox />
    </div>
  );
};

export default SuggestionsPage;
