/* eslint-disable react/prop-types */
import './ImageCountry.css'

function ImageCountry({race}){

    return(
        <img 
        style={{borderRadius: "50%", width: "100px", height: "100px", backgroundColor: "white"}}
        src={race.bandeira} alt={race.nome_do_pais}/>
    )
}

export default ImageCountry