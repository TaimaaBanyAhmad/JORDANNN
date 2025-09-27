
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ image, title, description, tags }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-jordan-green">{title}</h3>
        <p className="text-base text-light-text dark:text-dark-text flex-grow">{description}</p>
        {tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-jordan-blue text-white text-xs font-semibold rounded-full capitalize">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
