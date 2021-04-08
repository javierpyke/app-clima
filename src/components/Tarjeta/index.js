function Tarjeta (props){
    return(
        <div className="tarjeta">
            <div className="tarjeta-cabecera">
                  <h2>{props.mes}</h2>
            </div>
            <div className="tarjeta-cuerpo">
                <h1 className="maxima">&#127774; {props.high}° <small className="minima">/ {props.low}° &#127777;</small></h1>
                <ul>
                    <li>&#9728; {props.dryDays} días secos</li>
                    <li>&#10052; {props.snowDays} días de nieve</li>
                    <li>&#127783; {props.rainfall}mm de lluvia acumulada</li>
                </ul>
            </div>
        </div>
    )
    

}

export default Tarjeta;