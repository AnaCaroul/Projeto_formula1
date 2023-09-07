/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './TournamentBracket.module.css'
import HeaderComponentes from '../HeaderComponents/HeaderComponentes.jsx'
import DateTimeComponent from '../DateTimeComponent/DateTimeComponent.jsx'
import ImageCountry from '../ImageCountry/ImageCountry.jsx'
import Winner from '../Winner/Winner'

function TournamentBracket({fase}) {

    const [ races, setRaces ] = useState([])
    const url = `https://raw.githubusercontent.com/AnaCaroul/Projeto_api_formula1/main/${fase}-f1.json`
    

    useEffect(() => {
        const busccarCorridas = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setRaces(data)
        }
        busccarCorridas()
    }, [url])


    return(
        <section className='section'>
            {
                races.map( race => (
                    <div key={race.id} className={styles.race}>
                        <HeaderComponentes race={race} />
                        <DateTimeComponent race={race} />
                        <ImageCountry race={race} />
                        <Winner race={race} />
                    </div>
                ))
            }
        </section>
    )
}

export default TournamentBracket;
