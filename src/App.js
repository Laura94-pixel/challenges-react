import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const [covidCases, setCovidCases] = useState([]);

  const getCovidCases = () => {
    axios
    .get(`https://www.datos.gov.co/resource/gt2j-8ykr.json?ciudad_de_ubicaci_n=${city}&fecha_diagnostico=${date}T00:00:00.000`)
    .then(res => {
        setCovidCases (res.data);
      });
    };
 
     return (
       
       <div className="App">
         <h3>INFORMACIÓN SOBRE CASOS DE COVID-19 </h3>
         <h4>EN LOS MUNICIPIOS DE ANTIOQUIA</h4>
         <p>Ingrese los siguientes datos para obtener información de el municipio y la fecha de su interés. </p>
         <div>
         <label >Municipio</label>
         <input
         className="inputCovid"
          onChange={e => setCity (e.target.value) }
          type = "text" 
          name = "city"
          value={city} 
           />
         </div>
         
         <div>
         <label >Fecha </label>
         <input
         className="inputCovid"
         onChange={e => setDate (e.target.value) }
         type = "date" 
         name = "date"
         value={date} 
           />
         </div>
         <button 
         className="buttonCovid"
         onClick = {getCovidCases}>Buscar</button>
          <br />
          {covidCases.length > 0 && (
            <table class="table">
            <thead>
             <tr>
              <th scope="col">Edad</th>
              <th scope="col">Sexo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Estado</th>
             </tr>
            </thead>
            <tbody>
            {covidCases.map((covidCase)=> {
              return (
             <tr>
              <th scope="row">{covidCase.edad}</th>
              <td>{covidCase.sexo}</td>
              <td>{covidCase.tipo}</td>
              <td>{covidCase.estado}</td>
             </tr>
             );
            })}
            </tbody>
          </table>
          )}
          
        </div>
        )}
  
 
 export default App;
