import { createContext, useState } from "react";

export const CapinhasContext = createContext();
CapinhasContext.displayName = "Capinhas";

export const CapinhasProvider = ({ children }) => {
    const [capinhas, setCapinhas] = useState([])

    return (
        <CapinhasContext.Provider value={{ capinhas, setCapinhas }}>
            {children}
        </CapinhasContext.Provider>
    )

}
