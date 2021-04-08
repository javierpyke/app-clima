import {NavLink} from 'react-router-dom'

function TarjetaCiudades(props){
    return( 
            <div className="tarjeta" key={props.k}>
              <div className="tarjeta-cabecera">
                <h2>Ciudades que empiezan con {props.letra}</h2>
              </div>
              <div className="tarjeta-cuerpo">
                <ul>
                  {props.ciudades.filter(ciudad => ciudad.city[0] === props.letra).map(ciudad => <li key={ciudad.id}><NavLink to={"/ciudad/"+ciudad.id}>{ciudad.city}</NavLink></li>)}
                </ul>
              </div>
            </div>
          )
}

export default TarjetaCiudades;