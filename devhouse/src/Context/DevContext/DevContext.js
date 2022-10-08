import { useState, createContext, useContext } from 'react';

const DevContext = createContext();

const useDev = () => useContext(DevContext);

const DevProvider = ({children}) => {
    const [showDevInfo, setShowDevInfo] = useState(false);
    const [devDetails, setDevDetails] = useState({
        avatar: "",
        username: "",
        email: "",
        designation: "",
        bio: ""

    })
    return (
        <DevContext.Provider value={{showDevInfo, setShowDevInfo, devDetails, setDevDetails}}>
            {children}
        </DevContext.Provider>
    );
}

export {useDev, DevProvider};