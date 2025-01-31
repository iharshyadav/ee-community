"use client";

import { createContext, useContext, useState } from "react";

interface SelectedItemsContextProps {
  selectedItems: number[];
  setSelectedItems: (selectedItems: number[]) => void;
  clearSelectedItems: () => void;
}

const SelectedItemsContext = createContext<
  SelectedItemsContextProps | undefined
>(undefined);

export const SelectedItemsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const clearSelectedItems = () => {
    setSelectedItems([]); // Clear selected items
  };

  return (
    <SelectedItemsContext.Provider
      value={{ selectedItems, setSelectedItems, clearSelectedItems }}
    >
      {children}
    </SelectedItemsContext.Provider>
  );
};

export const useSelectedItems = () => {
  const context = useContext(SelectedItemsContext);
  if (!context) {
    throw new Error(
      "useSelectedItems must be used within a SelectedItemsProvider"
    );
  }
  return context;
};
