import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [languageData, setLanguageData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setLanguageData(data))
            .catch((error) => toast.error('Error fetching data:', error));
    }, []);

    return (
        <DataContext.Provider value={{ languageData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);

export default DataProvider;