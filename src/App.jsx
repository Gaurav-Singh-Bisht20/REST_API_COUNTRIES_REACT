import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import { ThemeProvider } from "./contexts/ThemeContext"


function App() {

  return (
    <>
        <ThemeProvider>
        <Header/>
        <Outlet/>
        </ThemeProvider>
    </>
  )
}

export default App
