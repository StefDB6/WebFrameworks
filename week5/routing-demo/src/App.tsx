import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import RootLayout from "./layouts/RootLayout";
import PageNotFound from "./pages/PageNotFound";
import PokemonPage from "./pages/PokemonPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";


const App = () => {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {path: "/", element: <HomePage/>},
        {path: "/page1", element: <Page1/>},
        {path: "/page2", element: <Page2/>},
        {path: "/pokemon", element: <PokemonPage/>},
        {path: "/pokemon/:id", element: <PokemonDetailPage/>},
      ]
    },
    {path: "*", element: <PageNotFound/>}
  ])


  return(
    <>
      <RouterProvider router={Router}/>
    </>
  );
}

export default App;