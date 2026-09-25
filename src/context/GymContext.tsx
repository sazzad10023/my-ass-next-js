"use client";
import { createContext, ReactNode, useState}from 'react';

 export const GymContext= createContext( {} );


const GymProvider = ({ children }: { children: ReactNode }) => {
    const [addPlain, setaddPlain] = useState([]);
    const [saveGym, setsaveGym] = useState([]);
    const sharedata = {
    addPlain,
    setaddPlain,
    saveGym,
    setsaveGym
}

    return (
        <GymContext.Provider value ={sharedata}>{children}</GymContext.Provider>
    );
};

export default GymProvider;