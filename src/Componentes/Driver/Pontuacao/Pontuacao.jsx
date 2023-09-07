/* eslint-disable react/prop-types */
import './Pontuacao.css'

function Pontuacao({driver}){
    return(
        <h3 className="pont">
          Pontuação: {driver.pontuacao}
        </h3>
    )
}

export default Pontuacao