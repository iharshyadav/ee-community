// app/lib/store.ts
import { create } from "zustand";

interface LocationStore {
  selectedLocations: string[];
  setSelectedLocations: (locations: string[]) => void;
  toggleLocation: (location: string) => void;
}

interface SectorStore {
  selectedSectors: string[];
  setSelectedSectors: (sectors: string[]) => void;
  toggleSector: (sector: string) => void;
}

interface DateStore {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

const useLocationStore = create<LocationStore>((set) => ({
  selectedLocations: [],
  setSelectedLocations: (locations) => set({ selectedLocations: locations }),
  toggleLocation: (location) =>
    set((state) => {
      const locations = new Set(state.selectedLocations);
      if (locations.has(location)) {
        locations.delete(location);
      } else {
        locations.add(location);
      }
      return { selectedLocations: Array.from(locations) };
    }),
}));

const useSectorStore = create<SectorStore>((set) => ({
  selectedSectors: [],
  setSelectedSectors: (sectors) => set({ selectedSectors: sectors }),
  toggleSector: (sector) =>
    set((state) => {
      const sectors = new Set(state.selectedSectors);
      if (sectors.has(sector)) {
        sectors.delete(sector);
      } else {
        sectors.add(sector);
      }
      return { selectedSectors: Array.from(sectors) };
    }),
}));

// Create the date store
const useDateStore = create<DateStore>((set) => ({
  startDate: new Date("2024-01-01"),
  endDate: new Date("2024-12-31"),
  setStartDate: (date: Date) => set({ startDate: date }),
  setEndDate: (date: Date) => set({ endDate: date }),
}));

export { useLocationStore, useSectorStore, useDateStore };
