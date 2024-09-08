import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CountryDetail from './Components/CountryDetail.jsx'
import Home from './Components/Home.jsx'
import ErrorPage from './Components/ErrorPage.jsx'


const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>,
            },
            {
                path : '/:Country',
                element : <CountryDetail/>,
            },
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
