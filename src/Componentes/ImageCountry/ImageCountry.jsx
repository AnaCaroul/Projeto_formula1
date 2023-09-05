/* eslint-disable react/prop-types */
import './ImageCountry.css'

function ImageCountry({corrida}){

    return(
        <img src={corrida.pais.banderia}   alt={corrida.pais.nome}/>
    )
}

export default ImageCountry