import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './App.css';

function App() {
  const [covidCases, setCovidCases] = useState([]);

  const getCovidCases = () => {
    axios
    .get(`https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=Marinilla&fecha_diagnostico=2020-08-06T00:00:00.000`)
    .then(res => {
        setCovidCases (res.data);
      });
    };
 
     return (
       <div className="App">
         <div>
         <label >City </label>
         <input 
           type = "text" 
           />
         </div>
         
         <div>
         <label >Date </label>
         <input 
           type = "date" 
           />
         </div>
         <button 
         onClick = {getCovidCases}>Search</button>
          <br />
          <ul className = "tablaCasos">
          <table class="table">
           <thead>
             <tr>
              <th scope="col">Edad</th>
              <th scope="col">Sexo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Estado</th>
             </tr>
           </thead>
          </table>
            {covidCases.map((covidCase)=> {
              return (
                <li>
                  <table class="table">
                  <tbody>
                   <tr>
                    <th scope="row"> {covidCase.edad}</th>
                    <td>{covidCase.sexo}</td>
                    <td>{covidCase.tipo}</td>
                    <td>{covidCase.estado}</td>
                  </tr>
                </tbody>
                 </table>
                </li>
              );
            })}
          </ul>
       </div>
   );
 }
 
 
 export default App;
 
