import { createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ myName: 'Randeep Singh' }}>
            {children}
        </AppContext.Provider>
    );
};

export const useProductContext = () => {
    return useContext(AppContext);
};
