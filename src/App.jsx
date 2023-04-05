import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import LayoutPublic from "./layouts/LayoutPublic"
import Contacto from "./pages/Contacto"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import NotFound from "./pages/NotFound"

import PageDetails from "./pages/PageDetails"


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<LayoutPublic/>}>
          <Route element={<Inicio />} path="/"></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Nosotros />} path="/nosotros"></Route>
          <Route element={<PageDetails/>} path="/nosotros/:id"></Route> 
          {/* id es el nombre que toma el argumento y paso con el useParams la ruta con parametro /:id  */}

        </Route>
        {/* <Route element={<NotFound/>} path="*"></Route> */}

      </Routes>

    </>
  )
}

export default App