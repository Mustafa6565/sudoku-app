import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
const themeColor = ["bg-amber-100", "bg-gray-100", "bg-orange-100", "bg-cyan-100"]
export default function ThemeSelector() {
    const { changeColor } = useContext(ThemeContext)
    return (
        <>
            <div className="flex text-end m-10">
                {themeColor.map((color) => (
                    <span onClick={() => changeColor(color)} className={`w-10 h-10 m-2 border-2 cursor-pointer ${color} rounded-4xl`}></span>

                ))}
            </div>
        </>
    )
}