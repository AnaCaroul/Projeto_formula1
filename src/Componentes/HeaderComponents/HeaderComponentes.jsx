/* eslint-disable react/prop-types */
import './HeaderComponentes.css'

function HeaderComponentes({race}){
    return(
        <h2 className="Titulo">
        { race.corrida }
        </h2>
    )
} 

export default HeaderComponentes