
export default function UserInput({ handleSatırDeğişikliği, handleSutunDeğişikliği, satırSayısı, sutunSayısı, handleGridOluştur }) {
    return (
        <>
            {/* Input alanları ve Grid Oluştur butonu (aynı kalabilir) */}
            <input
                type="number"
                min="1"
                value={satırSayısı}
                onChange={handleSatırDeğişikliği}
                className="w-50 h-10 bg-amber-50 mb-2"
                placeholder="Satır Sayısı"
            />
            <input
                type="number"
                min="1"
                value={sutunSayısı}
                onChange={handleSutunDeğişikliği}
                className="w-50 h-10 bg-amber-50 mb-4"
                placeholder="Sütun Sayısı"
            />
            <button onClick={handleGridOluştur} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
                Grid Oluştur
            </button>
        </>
    );
}