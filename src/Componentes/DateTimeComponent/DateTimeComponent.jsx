/* eslint-disable react/prop-types */
import './DateTimeComponent.css'

function DateTimeComponent({race}){
    return(
        <h3 className="data">
           {race.data}
        </h3>
    )
}

export default DateTimeComponent