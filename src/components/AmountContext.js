// ThemeContext.js
import React, { createContext, useState } from 'react';

const AmountContext = createContext();

const AmountProvider = ({ children }) => {
    const [amount, setAmount] = useState(0); // Example theme

    return (
        <AmountContext.Provider value={{ amount, setAmount }}>
            {children}
        </AmountContext.Provider>
    );
};

export { AmountProvider, AmountContext };
