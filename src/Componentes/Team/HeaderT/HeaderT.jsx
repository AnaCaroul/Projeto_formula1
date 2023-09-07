/* eslint-disable react/prop-types */
import './HeaderT.css'

function HeaderT({team}){
    return(
        <h2 className="T">
        { team.team_nome }
        </h2>
    )
} 

export default HeaderT