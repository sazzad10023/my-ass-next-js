"use client";
import { IGym } from '@/types/gym.types';
import { createContext, ReactNode, useState } from 'react';

interface IGymContext {
    addPlain: IGym[];
    setaddPlain: React.Dispatch<React.SetStateAction<IGym[]>>;
    saveGym: IGym[];
    setsaveGym: React.Dispatch<React.SetStateAction<IGym[]>>;
}

export const GymContext = createContext<IGymContext>({
    addPlain: [],
    setaddPlain: () => { },
    saveGym: [],
    setsaveGym: () => { },
});


const GymProvider = ({ children }: { children: ReactNode }) => {
    const [addPlain, setaddPlain] = useState<IGym[]>([]);
    const [saveGym, setsaveGym] = useState<IGym[]>([]);
    const sharedata = {
        addPlain,
        setaddPlain,
        saveGym,
        setsaveGym
    }

    return (
        <GymContext.Provider value={sharedata}>{children}</GymContext.Provider>
    );
};

export default GymProvider;