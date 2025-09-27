
import React, { createContext, useContext, ReactNode } from 'react';
import { AppData } from '../types';

const DataContext = createContext<AppData | null>(null);

export const DataProvider: React.FC<{ value: AppData | null; children: ReactNode }> = ({ value, children }) => {
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = (): AppData => {
    const context = useContext(DataContext);
    if (context === null) {
        throw new Error('useData must be used within a DataProvider with a valid value.');
    }
    return context;
};
