/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './TournamentBracket2.module.css'
import HeaderD from '../Driver/HeaderD/HeaderD.jsx'
import Pontuacao from '../Driver/Pontuacao/Pontuacao.jsx'
import ImgD from '../Driver/ImgD/ImgD.jsx'
import Equipe from '../Driver/Equipe/Equipe.jsx'

function TournamentBracket2({fase}) {

    const [ drivers, setDrivers ] = useState([])
    const url = `https://raw.githubusercontent.com/AnaCaroul/Projeto_api_formula1/main/${fase}-f1.json`
    

    useEffect(() => {
        const busccarDrivers = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setDrivers(data)
        }
        busccarDrivers()
    }, [url])


    return(
        <section className='section'>
            {
                drivers.map( driver => (
                    <div key={driver.id} className={styles.driver}>
                        <HeaderD driver={driver} />
                        <Pontuacao driver={driver} />
                        <ImgD driver={driver}/>
                        <Equipe driver={driver}/>
                    </div>
                ))
            }
        </section>
    )
}

export default TournamentBracket2;
