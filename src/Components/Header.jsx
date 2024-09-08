import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react"


export default function Header() {
    const [darkmode, SetDarkmode] = useState(false);
    const theme = useContext(ThemeContext);
    console.log(theme)
  return (
    <header className="py-4 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:bg-slate-100">
        <div className="w-[80%] max-w-[1200px] mx-auto  flex justify-between">
            <h1>Where you are in the World ?</h1>
            <div>
            {
                darkmode ? <p><span>sun</span>Light Mode</p>  : <p><span>moon</span> Dark Mode</p>
            }
            </div>
        </div>
    </header>
  )
}
