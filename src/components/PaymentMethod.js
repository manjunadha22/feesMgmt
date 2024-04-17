// ThemeContext.js
import React, { createContext, useState } from 'react';

const PaymentMethodContext = createContext();

const PaymentMethodProvider = ({ children }) => {
    const [paymentMethod, setPaymentMethod] = useState(""); // Example theme

    return (
        <PaymentMethodContext.Provider value={{ paymentMethod, setPaymentMethod }}>
            {children}
        </PaymentMethodContext.Provider>
    );
};

export { PaymentMethodProvider, PaymentMethodContext };
