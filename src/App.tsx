import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import PokemonListPage from "./pages/pokemon/PokemonListPage.tsx";
import RootLayout from "./pages/Root.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/pokemon",
                    element: <PokemonListPage/>
                }
            ]
        }
    ]
);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
