import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '@/App.css';
import HomePage from "@/pages/HomePage";
import PokemonListPage from "@/pages/pokemon/PokemonListPage.tsx";
import Pokemon from "@/pages/pokemon/Pokemon.tsx";
import RootLayout from "@/pages/Root.tsx";
import PokemonDetails from "./pages/pokemon/PokemonDetails.tsx";

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
                    path: "/pokemons",
                    element: <PokemonListPage/>
                },
                {
                    path: "/pokemons/:id",
                    element: <PokemonDetails/>
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
