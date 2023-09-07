/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './TournamentBracket3.module.css'
import HeaderT from '../Team/HeaderT/HeaderT.jsx'
import TeamChefe from '../Team/TeamChefe/TeamChefe.jsx'
import ImgT from '../Team/ImgT/ImgT.jsx'
import Dupla from '../Team/Dupla/Dupla.jsx'


function TournamentBracket3({fase}) {

    const [ teams, setTeams ] = useState([])
    const url = `https://raw.githubusercontent.com/AnaCaroul/Projeto_api_formula1/main/${fase}-f1.json`
    

    useEffect(() => {
        const buscarEquipes = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setTeams(data)
        }
        buscarEquipes()
    }, [url])


    return(
        <section className='section'>
            {
                teams.map( team => (
                    <div key={team.id} className={styles.team}>
                        <HeaderT team={team} />
                        <TeamChefe team={team} />
                        <ImgT team={team} />
                        <Dupla team={team} />
                    </div>
                ))
            }
        </section>
    )
}

export default TournamentBracket3;
