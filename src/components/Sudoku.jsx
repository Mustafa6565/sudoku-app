import React, { useState } from 'react';

const Grid9x9 = () => {
    // Grid'in içeriğini tutacak state
    const [gridData, setGridData] = useState(
        Array(9).fill().map(() => Array(9).fill(""))
    );

    // Seçilen hücreyi takip etmek için state
    const [selectedCell, setSelectedCell] = useState(null);

    // Hücreye tıklama işlemi
    const handleCellClick = (row, col) => {
        setSelectedCell({ row, col });
    };

    // Hücre değerini değiştirme
    const updateCellValue = (value) => {
        if (!selectedCell) return;

        const { row, col } = selectedCell;
        const newGridData = [...gridData];
        newGridData[row][col] = value;
        setGridData(newGridData);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">9x9 Grid Izgara</h2>

            <div className="grid-container border-2 border-gray-800 inline-block">
                {Array(9).fill().map((_, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="flex">
                        {Array(9).fill().map((_, colIndex) => (
                            <div
                                key={`cell-${rowIndex}-${colIndex}`}
                                className={`
                  w-8 h-8 
                  flex items-center justify-center
                  border border-gray-400 
                  cursor-pointer
                  ${selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex
                                        ? 'bg-blue-200'
                                        : 'hover:bg-gray-100'}
                  ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2 border-b-gray-800' : ''}
                  ${colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2 border-r-gray-800' : ''}
                `}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                            >
                                {gridData[rowIndex][colIndex]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {selectedCell && (
                <div className="mt-4">
                    <p className="mb-2">
                        Seçili Hücre: Satır {selectedCell.row + 1}, Sütun {selectedCell.col + 1}
                    </p>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                            <button
                                key={`btn-${num}`}
                                className="w-8 h-8 bg-gray-200 hover:bg-gray-300 flex items-center justify-center rounded"
                                onClick={() => updateCellValue(num)}
                            >
                                {num}
                            </button>
                        ))}
                        <button
                            className="px-2 bg-red-200 hover:bg-red-300 flex items-center justify-center rounded"
                            onClick={() => updateCellValue("")}
                        >
                            Temizle
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
        .grid-container {
          /* Tailwind'in w-8 h-8 sınıfları 2rem yerine 2rem'e tekabül eder */
          /* Dikkat: her hücre için 2rem x 2rem boyutunda */
        }
      `}</style>
        </div>
    );
};

export default Grid9x9;