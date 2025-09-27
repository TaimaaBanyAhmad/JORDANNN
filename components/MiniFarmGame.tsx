
import React, { useState, useEffect } from 'react';

const MiniFarmGame: React.FC = () => {
  const [stage, setStage] = useState(0); // 0: seed, 1: sprout, 2: small plant, 3: mature plant
  const [water, setWater] = useState(0);
  const [canPlant, setCanPlant] = useState(true);

  const plantEmojis = ['🌱', '🌿', '🌳', '🍅'];
  const stageLabels = ['Seed Planted', 'Sprouting', 'Growing', 'Harvest Ready!'];

  useEffect(() => {
    let growthInterval: number;
    if (stage > 0 && stage < 4) {
      growthInterval = window.setInterval(() => {
        setStage(prev => (prev < 3 ? prev + 1 : 3));
      }, 2000);
    }
    return () => clearInterval(growthInterval);
  }, [stage]);

  const handlePlant = () => {
    if (canPlant) {
      setStage(1);
      setWater(10);
      setCanPlant(false);
    }
  };

  const handleWater = () => {
    if (stage > 0 && stage < 4) {
      setWater(prev => prev + 5);
    }
  };
  
  const handleReset = () => {
      setStage(0);
      setWater(0);
      setCanPlant(true);
  }

  return (
    <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-jordan-green mb-4">Interactive Farming Demo</h3>
      <div className="bg-jordan-brown bg-opacity-20 dark:bg-opacity-30 p-8 rounded-md min-h-[150px] flex items-center justify-center">
        <div className="text-6xl transform transition-transform duration-500" style={{ transform: `scale(${1 + stage * 0.2})` }}>
          {stage > 0 ? plantEmojis[stage - 1] : '🌱'}
        </div>
      </div>
      <p className="my-4 text-lg font-semibold">{stage > 0 ? stageLabels[stage-1] : "Ready to Plant"}</p>
      <div className="my-4 p-2 bg-blue-100 dark:bg-blue-900 rounded-md">
        <p>💧 Water Used: <span className="font-bold">{water} units</span></p>
      </div>
      <div className="flex justify-center gap-4">
        {stage === 0 && <button onClick={handlePlant} disabled={!canPlant} className="bg-jordan-green text-white px-4 py-2 rounded-md hover:bg-opacity-80 disabled:bg-gray-400">Plant Seed</button>}
        {stage > 0 && stage < 4 && <button onClick={handleWater} className="bg-jordan-blue text-white px-4 py-2 rounded-md hover:bg-opacity-80">Water Plant</button>}
        {stage > 0 && <button onClick={handleReset} className="bg-jordan-brown text-white px-4 py-2 rounded-md hover:bg-opacity-80">Start Over</button>}
      </div>
    </div>
  );
};

export default MiniFarmGame;
