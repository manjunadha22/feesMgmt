// ThemeContext.js
import React, { createContext, useState } from 'react';

const DeptContext = createContext();

const DeptProvider = ({ children }) => {
    const [dept, setDept] = useState(""); // Example theme

    return (
        <DeptContext.Provider value={{ dept, setDept }}>
            {children}
        </DeptContext.Provider>
    );
};

export { DeptProvider, DeptContext };
