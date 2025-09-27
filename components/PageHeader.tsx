
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-extrabold text-jordan-blue dark:text-jordan-green mb-2">{title}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
