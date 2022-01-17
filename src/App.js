import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Produccion from '../src/components/produccion/Produccion';
import Proyectos from "./components/proyectos/Proyectos";
import NotFound from './pages/NotFounf';
import Barra from "./components/layout/Barra";


function App() {
  
  
  return (

      <Router> 
        <Routes>
          <Route path="/" element={<Barra/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/nueva-cuenta" element={<NuevaCuenta/>}/>
          <Route path="/produccion" element={<Produccion/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
     
  );
}

export default App;













  // useEffect(() => {
  //   fetch('http://localhost:4000/graphql', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({query: `
  //         query getPersonas{
  //           getPersonas {
  //             id
  //             nombre
  //             apellido
  //           }
  //         }
  //     `})
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res.data)
  //   })

  // })


// client.query({ query: query })
//  .then(res => {
//    console.log(res.data)
//  });




