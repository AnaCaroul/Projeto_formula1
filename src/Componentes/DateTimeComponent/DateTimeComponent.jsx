/* eslint-disable react/prop-types */
import './DateTimeComponent.css'

function DateTimeComponent({corrida}){
    return(
        <h3 className="data">
           {corrida.data}
        </h3>
    )
}

export default DateTimeComponent