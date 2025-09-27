import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import IrrigationPage from './pages/IrrigationPage';
import CropsPage from './pages/CropsPage';
import PlantsPage from './pages/PlantsPage';
import VerticalFarmingPage from './pages/VerticalFarmingPage';
import PlantDiseasesPage from './pages/PlantDiseasesPage';
import ContactPage from './pages/ContactPage';
import { AppData } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import SplashScreen from './components/SplashScreen';
import SuggestionsPage from './pages/SuggestionsPage';

const App: React.FC = () => {
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppReady(true);
    }, 3000); // Display splash screen for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('./data/data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData: AppData = await response.json();
      setData(jsonData);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const AppLayout: React.FC = () => (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <ScrollProgressBar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <p className="text-center text-xl">Loading data...</p>}
        {error && <p className="text-center text-xl text-red-500">Error: {error}</p>}
        {data && <Outlet />}
      </main>
      <Footer />
    </div>
  );

  return (
    <ThemeProvider>
      <SplashScreen isFinishing={isAppReady} />
      <div className={`transition-opacity duration-500 ${isAppReady ? 'opacity-100' : 'opacity-0'}`}>
        <DataProvider value={data}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="statistics" element={<StatisticsPage />} />
                <Route path="irrigation" element={<IrrigationPage />} />
                <Route path="crops" element={<CropsPage />} />
                <Route path="plants" element={<PlantsPage />} />
                <Route path="vertical-farming" element={<VerticalFarmingPage />} />
                <Route path="plant-diseases" element={<PlantDiseasesPage />} />
                <Route path="suggestions" element={<SuggestionsPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </HashRouter>
        </DataProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;