import {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom'


const Ciudades = () => {
    const [ciudades,setCiudades] = useState([])
    const [ciudadesTotales,setCiudadesTotales] = useState([])

    async function getData() {
      const response = await fetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json");
      const ciudades = await response.json();
      setCiudades(ciudades)
      setCiudadesTotales(ciudades)
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    var letras = []
    for(let ciudad in ciudades){
      if(letras.indexOf(ciudades[ciudad].city[0]) < 0){
        letras.push(ciudades[ciudad].city[0])
      }
    }
  
    function buscar(props,e){
      var ciudadesFiltradas = ciudadesTotales.filter((ciudad) => ciudad[props].toLowerCase().startsWith(e.target.value.toLowerCase()))
      setCiudades(ciudadesFiltradas)
    }
  
    return (
      <div className="main">
        <div className="input">
            <input type="text" onKeyUp={(event) => buscar("city",event)} placeholder="Ingrese una ciudad"></input>
            <input type="text" onKeyUp={(event) => buscar("country",event)} placeholder="Ingrese un pais"></input>
        </div>
        <div className="container">      
            {letras.map((letra,k)=> 
                <div className="tarjeta" key={k}>
                  <div className="tarjeta-cabecera">
                    <h2>Ciudades que empiezan con {letra}</h2>
                  </div>
                  <div className="tarjeta-cuerpo">
                    <ul>
                      {ciudades.filter(ciudad => ciudad.city[0] === letra).map(ciudad => <li key={ciudad.id}><NavLink to={"/ciudad/"+ciudad.id}>{ciudad.city}</NavLink></li>)}
                    </ul>
                  </div>
                </div>)}
          </div>
        </div>     
        )
                        }

export default Ciudades;