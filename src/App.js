import React, {Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const OBTENER_PERSONAS = gql`
 query getPersonas{
   getPersonas {
     id
     nombre
     apellido
   }
 }
`;


function App() {
  
  const { data, loading, error } = useQuery(OBTENER_PERSONAS);

  
  console.log(loading)
  console.log(error)

  if (loading) return 'Cargando..';

  console.log(data.getPersonas)

  const {getPersonas} = data;
  console.log(getPersonas);

  return (
    <Fragment>
      <h1>Desde la App</h1>

      <BarChart
        className='mt-10'
            width={600}
            height={500}
            data={getPersonas}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="id" fill="#3182ce" />
            <Bar dataKey="apellido" fill="#82ca9d" />
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


