/* eslint-disable react/prop-types */
import './HeaderComponentes.css'

function HeaderComponentes({corrida}){
    return(
        <h2 className="Titulo">
        { corrida.corrida }
        </h2>
    )
} 

export default HeaderComponentes