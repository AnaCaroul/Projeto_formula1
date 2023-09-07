/* eslint-disable react/prop-types */

function ImgT({team}){

    return(
        <img 
        style={{width: "150px", height: "100px", backgroundColor: "white"}}
        src={team.foto} alt={team.team_nome}/>
    )
}

export default ImgT