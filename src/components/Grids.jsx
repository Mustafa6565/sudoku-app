import { useContext } from "react";
import { Context } from "../contexts/Context";


export default function GridS() {
    const { satırSayısı, sutunSayısı, renkliHücreler, getHücreId, handleHücreClick } = useContext(Context)
    return (
        <>
            <div className="flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold mb-5 ">Tablo Çiz</h2>
                <div className="grid-container border-2 border-gray-800 inline-block">
                    {Array(satırSayısı).fill().map((_, rowIndex) => (
                        <div id={`${rowIndex + 1}`} key={`row-${rowIndex}`} className="flex">
                            {Array(sutunSayısı).fill().map((_, colIndex) => (
                                <div
                                    id={getHücreId(rowIndex, colIndex)}
                                    key={`cell-${rowIndex}-${colIndex}`}
                                    className={`
                                        w-8 h-8
                                        flex items-center justify-center
                                        border border-gray-400
                                        cursor-pointer
                                        ${renkliHücreler.includes(getHücreId(rowIndex, colIndex)) ? "bg-amber-700" : ""}
                                    `}
                                    onClick={() => handleHücreClick(getHücreId(rowIndex, colIndex))}
                                >
                                    {getHücreId(rowIndex, colIndex)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}