import { createContext, useState } from "react";

const BASLANGIC_SAYISI = 5;
export const Context = createContext();

export function ContextProvider({ children }) {
    const [satırSayısı, setSatırSayısı] = useState(BASLANGIC_SAYISI);
    const [sutunSayısı, setSutunSayısı] = useState(BASLANGIC_SAYISI);

    const handleSatırDeğişikliği = (e) => {
        setSatırSayısı(parseInt(e.target.value, 10) || 1);
    };

    const handleSutunDeğişikliği = (e) => {
        setSutunSayısı(parseInt(e.target.value, 10) || 1);
    };

    const [renkliHücreler, setRenkliHücreler] = useState([]);

    const handleGridOluştur = () => {
        // İhtiyaç duyulursa gridin yeniden oluşturulma mantığı buraya eklenebilir.
    };

    const getHücreId = (rowIndex, colIndex) => {
        return (rowIndex + 1) * (colIndex + 1);
    };

    const handleHücreClick = (id) => {
        if (renkliHücreler.includes(id)) {
            setRenkliHücreler(renkliHücreler.filter((hücreId) => hücreId !== id));
        } else {
            setRenkliHücreler([...renkliHücreler, id]);
        }
    };
    return (
        <Context.Provider value={{ handleSatırDeğişikliği, handleSutunDeğişikliği, satırSayısı, sutunSayısı, renkliHücreler, handleGridOluştur, getHücreId, handleHücreClick }}>
            {children}
        </Context.Provider>
    );
}