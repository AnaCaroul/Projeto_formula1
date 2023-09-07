/* eslint-disable react/prop-types */
import './TeamChefe.css'

function TeamChefe({team}){
    return(
        <h3 className="chefe">
           {team.team_chief}
        </h3>
    )
}

export default TeamChefe