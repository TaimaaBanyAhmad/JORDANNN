
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jordan-blue text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Food Security in Jordan</h3>
            <p className="text-sm text-gray-300">A student project dedicated to raising awareness about Jordan's agricultural challenges and opportunities. Data is illustrative and based on publicly available reports.</p>
          </div>
          <div className="text-sm">
            <h3 className="text-lg font-semibold mb-2">Ministry of Agriculture, Jordan</h3>
            <p><strong>Address:</strong> Tla' Al-Ali, Amman, Jordan</p>
            <p><strong>Phone:</strong> +962 6 568 6151</p>
            <p><strong>Email:</strong> info@moa.gov.jo</p>
            <p><strong>Website:</strong> <a href="https://moa.gov.jo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">https://moa.gov.jo</a></p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Student Project. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
