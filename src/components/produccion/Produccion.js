import React, {useEffect} from 'react';
import { gql, useQuery } from '@apollo/client';
import {BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Barra from '../layout/Barra';
import '../../index.css';



const OBTENER_PRODUCCION = gql`
query getProducciones {
  getProducciones {
    id
    estacion
    actividad
    cantidad
  }
}
`;

const Produccion = () => {

  const {data, loading, error, startPolling, stopPolling} = useQuery(OBTENER_PRODUCCION);

  useEffect(() => {
      startPolling(1000);
      return () => {
          stopPolling();
      }
  }, [startPolling, stopPolling])

  if(loading) return 'cargando...';
    console.log(loading)
    console.log(error)
  
    if (loading) return 'Cargando..';
  
    console.log(data.getProducciones)
  
    const {getProducciones} = data;
    
    // Total Picking y Putaway
  
    const arreglo_pick = getProducciones.filter(item => item.actividad.includes('PICK'));
    console.log(arreglo_pick);
    const picking = arreglo_pick.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(picking);
  
    const arreglo_put = getProducciones.filter(item => item.actividad.includes('PUTAWAY'));
    console.log(arreglo_put);
    const putaway = arreglo_put.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(putaway);
  
    // Ordenado de estaciones
    // Estacion 1 Picking
    const arreglo_estacion_uno_pick = arreglo_pick.filter(item => item.estacion === 1);
    console.log(arreglo_estacion_uno_pick);
  
    const port_uno_pick = arreglo_estacion_uno_pick.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(port_uno_pick);
  
    // Estacion 1 Putaway
    const arreglo_estacion_uno_put = arreglo_put.filter(item => item.estacion === 1);
    console.log(arreglo_estacion_uno_put);
  
    const port_uno_put = arreglo_estacion_uno_put.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(port_uno_put);
  
    // Estacion 2 Picking
    const arreglo_estacion_dos_pick = arreglo_pick.filter(item => item.estacion === 2);
    console.log(arreglo_estacion_dos_pick);
  
    const port_dos_pick = arreglo_estacion_dos_pick.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(port_dos_pick);
  
    // Estacion 2 Putaway
    const arreglo_estacion_dos_put = arreglo_put.filter(item => item.estacion === 2);
    console.log(arreglo_estacion_dos_put);
  
    const port_dos_put = arreglo_estacion_dos_put.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(port_dos_put);
  
  
    // Estacion 3 Picking
    const arreglo_estacion_tres_pick = arreglo_pick.filter(item => item.estacion === 3);
    console.log(arreglo_estacion_tres_pick);
  
    const port_tres_pick = arreglo_estacion_tres_pick.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(port_tres_pick)
  
    // Estacion 3 Putaway
    const arreglo_estacion_tres_put = arreglo_put.filter(item => item.estacion === 3);
    console.log(arreglo_estacion_tres_put);
  
    const port_tres_put = arreglo_estacion_tres_put.map(item => item.cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(port_tres_put) 
  
  
  
    // Armado del arreglo final
    var Array1 = [];
    arreglo_estacion_uno_pick.map( (elemento) => {
      return Array1.push(elemento.estacion, port_uno_pick, port_uno_put)
    });
    const ArraySuma1 = new Set(Array1);
    let result1 = [...ArraySuma1];
    const obj1 = Object.assign({}, result1)
    console.log(obj1);
  
    var Array2 = [];
    arreglo_estacion_dos_pick.map( (elemento) => {
      return Array2.push(elemento.estacion, port_dos_pick, port_dos_put)
    });
    const ArraySuma2 = new Set(Array2);
    let result2 = [...ArraySuma2];
    const obj2 = Object.assign({}, result2)
    console.log(obj2);
  
    var Array3 = [];
    arreglo_estacion_tres_pick.map( (elemento) => {
      return Array3.push(elemento.estacion, port_tres_pick, port_tres_put)
    });
    const ArraySuma3 = new Set(Array3);
    let result3 = [...ArraySuma3];
    const obj3 = Object.assign({}, result3)
    console.log(obj3);
    
  
    const datosfinales = [];
    datosfinales.push(obj1, obj2, obj3)
    console.log(datosfinales); 


    return ( 
      <div className="contenedor-app">
            
          <div className="seccion-principal">
                <main>

                  <Barra/>
                        
                        <div className='produccion-total'>
                              <p className='nombre-produccion'>Total Picking: {picking}</p>
                              <p className='nombre-produccion'>Total Putaway: {putaway}</p>
                        </div>
                          
                    
                      <div className='tarea'> 
                      
                              <div className='produccion-dia'>
                                    <ul>
                                        <li>PRODUCCION DEL DIA:</li>
                                        <li>Linea 1 = PICK: {port_uno_pick} | PUTAWAY: {port_uno_put}</li>
                                        <li>Linea 2 = PICK: {port_dos_pick} | PUTAWAY: {port_dos_put}</li>
                                        <li>Linea 3 = PICK: {port_tres_pick} | PUTAWAY: {port_tres_put}</li>
                                    </ul>  
                              </div>
                                

                              <div className="question">

                                    <div className="question-container">
                                      <ResponsiveContainer width={"100%"} height={"100%"}>
                                      <BarChart
                                      className='mt-10'
                                          width={1100}
                                          height={600}
                                          data={datosfinales}
                                          margin={{
                                              top: 5,
                                              right: 30,
                                              left: 20,
                                              bottom: 5,
                                          }}
                                          >
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis dataKey="0" />
                                          <YAxis />
                                          <Tooltip />
                                          <Legend />
                                          <Bar dataKey="1" fill="#3182ce" />
                                          <Bar dataKey="2" fill="#82ca9d" />
                                      </BarChart> 
                                      </ResponsiveContainer> 
                                    </div>
                              </div>
                      </div>                
                </main>
                
          </div>
      </div>
     );
}
 
export default Produccion;