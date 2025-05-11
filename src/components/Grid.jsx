import { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import UserInput from "./UserInput";
import GridS from "./Grids";
import ThemeSelector from "./ThemeSelector";
import { ThemeContext } from "../contexts/ThemeContext";

const Grid = () => {
    const { color } = useContext(ThemeContext)
    const { handleSatırDeğişikliği, handleSutunDeğişikliği, satırSayısı, sutunSayısı, handleGridOluştur } = useContext(Context);


    return (
        <div className={`flex flex-col justify-center ${color} h-screen items-center`}>

            <ThemeSelector />
            <UserInput handleSatırDeğişikliği={handleSatırDeğişikliği} handleSutunDeğişikliği={handleSutunDeğişikliği} satırSayısı={satırSayısı} sutunSayısı={sutunSayısı} handleGridOluştur={handleGridOluştur} />

            <GridS />



        </div>
    );
};



export default Grid;

