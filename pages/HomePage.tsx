
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MiniFarmGame from '../components/MiniFarmGame';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Jordan's Path to Food Security"
        subtitle="Exploring the challenges and innovative solutions in Jordan's agricultural sector. This project provides a student's perspective on how a nation with scarce water resources strives for self-sufficiency."
      />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-lg">
            Jordan, one of the most water-scarce countries in the world, faces significant hurdles in ensuring a stable food supply for its population. The agricultural sector, while vital, consumes over half of the country's available water.
          </p>
          <p>
            This website explores key areas related to this challenge:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Strategic Crops:</strong> Understanding which crops are crucial for national security.</li>
            <li><strong>Water Innovation:</strong> Examining efficient irrigation techniques.</li>
            <li><strong>Modern Farming:</strong> Looking at vertical farming and other technologies that are reshaping agriculture in arid regions.</li>
          </ul>
          <div className="pt-4">
            <Link to="/statistics" className="inline-block bg-jordan-green text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              View Statistics
            </Link>
          </div>
        </div>
        <div>
          <img src="https://picsum.photos/seed/jordanlandscape/600/400" alt="Jordanian landscape with fields" className="rounded-lg shadow-xl" loading="lazy" />
        </div>
      </div>

      <div className="pt-8">
        <MiniFarmGame />
      </div>
    </div>
  );
};

export default HomePage;
