/* eslint-disable react/prop-types */
import './Winner.css'

function Winner({corrida}){
    return(
        <h4>Vencedor: {corrida.vencedor}</h4>
    )
}
export default Winner;