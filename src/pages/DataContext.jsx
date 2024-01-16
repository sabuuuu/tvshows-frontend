import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <DataContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
