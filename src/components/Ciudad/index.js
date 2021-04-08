import {useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom'
import meses from '../../meses.js'
import Tarjeta from '../Tarjeta'

const Ciudad = () => {
    let params = useParams();

    const [paises,setPaises] = useState([])
  
    async function getData() {
      const response = await fetch("https://raw.githubusercontent.com/michaelx/climate/master/climate.json");
      const paises = await response.json();
      setPaises(paises);
    }
  
    useEffect(() => {
      getData();
    }, []);

    if(paises[params.id-1]){
      var pais = paises[params.id-1]
      var bandera = '../img/banderas/'+pais.country+'.png'
      return (<>
        <div className="ciudad">
          <img src={bandera} alt='bandera' title='bandera' />     
          <h2>{pais.country} <small>&gt; {pais.city}</small></h2>
        </div>
        <div className="container">
          {pais.monthlyAvg.map((mes,i)=> <Tarjeta key={i} mes={meses[i]} high={mes.high} low={mes.low} dryDays={mes.dryDays} snowDays={mes.snowDays} rainfall={mes.rainfall}/>)}
        </div>
        <div className='back'><Link to="/"><img src='../img/back.png' alt='back' title='back' width="30" height="30"/></Link></div>
        </>
    
    )} else {
        return(<></>)
    }
}

export default Ciudad;