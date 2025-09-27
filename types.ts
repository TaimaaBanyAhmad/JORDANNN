
export interface StatisticChartData {
  name: string;
  value: number;
  color?: string;
}

export interface CropProductionData {
  year: number;
  [key: string]: number;
}

export interface SiteStatistics {
  agricultureTypes: StatisticChartData[];
  waterConsumption: StatisticChartData[];
  cropProduction: CropProductionData[];
}

export interface Item {
  id: number;
  name: string;
  type: string;
  rarity: 'common' | 'rare' | string;
  image: string;
  description: string;
}

export interface IrrigationMethod {
    id: number;
    name: string;
    image: string;
    description: string;
}

export interface AppData {
  statistics: SiteStatistics;
  crops: Item[];
  plants: Item[];
  irrigation: IrrigationMethod[];
  verticalFarming: IrrigationMethod[];
  plantDiseases: IrrigationMethod[];
}
