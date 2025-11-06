import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Oefening1 from "./pages/Oefening1";
import Oefening2 from "./pages/Oefening2";
import Oefening3 from "./pages/Oefening3";
import RootLayout from "./layouts/RootLayout";
import Oefening2Detail from "./pages/Oefening2Detail";

const App = () => {
  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {path: "/", element: <Oefening1/>},
        {path: "/oefening1", element: <Oefening1/>},
        {path: "/oefening2", element: <Oefening2/>},
        {path: "/oefening2/:id", element: <Oefening2Detail/>},
        {path: "/oefening3", element: <Oefening3/>},
      ]
    }
  ])

  return(
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App;