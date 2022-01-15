import React, {Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const OBTENER_PRODUCCION = gql`
query getProducciones {
  getProducciones {
    id
    estacion
    tipo
    cantidad
  }
}
`;


function App() {
  
  const { data, loading, error } = useQuery(OBTENER_PRODUCCION);

  
  console.log(loading)
  console.log(error)

  if (loading) return 'Cargando..';

  console.log(data.getProducciones)

  const {getProducciones} = data;
  
  // Total Picking y Putaway

  const arreglo_pick = getProducciones.filter(item => item.tipo.includes('picking'));
  console.log(arreglo_pick);
  const picking = arreglo_pick.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  console.log(picking);

  const arreglo_put = getProducciones.filter(item => item.tipo.includes('put'));
  console.log(arreglo_put);
  const putaway = arreglo_put.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  console.log(putaway);

  // Ordenado de estaciones

  const arreglo_estacion_uno = getProducciones.filter(item => item.estacion === 1);
  console.log(arreglo_estacion_uno);

  const port_uno = arreglo_estacion_uno.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  console.log(port_uno);

  const arreglo_estacion_dos = getProducciones.filter(item => item.estacion === 2);
  console.log(arreglo_estacion_dos);

  const port_dos = arreglo_estacion_dos.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  console.log(port_dos);

  const arreglo_estacion_tres = getProducciones.filter(item => item.estacion === 3);
  console.log(arreglo_estacion_tres);

  const port_tres = arreglo_estacion_tres.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
  console.log(port_tres)

  //Eliminar objetos repetidos en un array


  // Armado del arreglo final
  
  
  


  
  return (
    <Fragment>
      <h1>Desde la App</h1>

      <BarChart
        className='mt-10'
            width={600}
            height={500}
            data={getProducciones}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="estaciones" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cantidad" fill="#3182ce" />
            <Bar dataKey="tipo" fill="#82ca9d" />
        </BarChart>
    </Fragment>
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


