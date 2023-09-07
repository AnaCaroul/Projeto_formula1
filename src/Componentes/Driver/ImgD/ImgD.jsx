/* eslint-disable react/prop-types */
import './ImgD.css'

function ImgD({driver}){

    return(
        <img 
        style={{width: "140px", height: "105px", backgroundColor: "white"}}
        src={driver.foto} alt={driver.nome}/>
    )
}

export default ImgD