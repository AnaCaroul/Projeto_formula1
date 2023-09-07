/* eslint-disable react/prop-types */
import './HeaderD.css'

function HeaderD({driver}){
    return(
        <h2 className="T">
        {driver.nome}
        </h2>
    )
} 

export default HeaderD