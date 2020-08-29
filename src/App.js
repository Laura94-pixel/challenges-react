import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cityCovid, setCityCovid] = useState({city:''});
  const [dateCovid, setDateCovid] = useState({date:''});

  const [covidCases, setCovidCases] = useState([]);

  const getCovidCases = () => {
    axios
    .get('https://www.datos.gov.co/resource/gt2j-8ykr.json?departamento=Antioquia', {
      params: {
        city: cityCovid.onCity,
        ...(dateCovid.onDate ? { date: dateCovid.onDate }: {} ) 
      },
    })
    .then(res => {
        setCovidCases (res.data);
      });
    };
 
     return (
       <div className="App">
         <div>
         <label >City </label>
         <input
          onChange={e => setCityCovid ({onCity: e.target.value}) }
          type = "text" 
          name = "city"
          value={cityCovid.onCity} 
           />
         </div>
         
         <div>
         <label >Date </label>
         <input
         onChange={e => setDateCovid ({onDate: e.target.value}) }
         type = "date" 
         name = "date"
         value={dateCovid.onDate} 
           />
         </div>
         <button 
         onClick = {getCovidCases}>Search</button>
          <br />
          <ul className = "tablaCasos">
            {covidCases.map((covidCase)=> {
              return (
               
                 <table class="table">
                 <tbody>
                   <tr>
                    <th scope="row">{covidCase.edad}</th>
                     <td>{covidCase.sexo}</td>
                     <td>{covidCase.tipo}</td>
                     <td>{covidCase.estado}</td>
                   </tr>
                 </tbody>
               </table>
              );
            })}
          </ul>
       </div>
   );
 }
 
 
 export default App;
 
