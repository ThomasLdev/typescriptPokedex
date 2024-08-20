import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'src/App.css';
import HomePage from "src/pages/HomePage";
import PokemonListPage from "src/pages/pokemon/PokemonListPage.tsx";
import RootLayout from "src/pages/Root.tsx";

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
