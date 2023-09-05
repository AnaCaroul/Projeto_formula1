/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './TournamentBracketStyle.css'
import HeaderComponentes from '../HeaderComponents/HeaderComponentes,jsx'
import DateTimeComponent from '../DateTimeComponent/DateTimeComponent.jsx'

function TournamentBracket({fase}) {

    const [ corridas, setCorridas ] = useState([])
    const url = `https://raw.githubusercontent.com/luizamiltonn/apif1/main/${fase}.json`

    useEffect(() => {
        const busccarCorridas = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setJogos(data)
        }
        busccarCorridas()
    }, [url])


    return(
        <>
        <section className="corridas">
            {
                 corridas.map( race => (
                    <div className="race">
                        <HeaderComponentes />
                        <DateTimeComponent />
                 
                    </div>
            }
        </section>
        </>
    )
}

export default TournamentBracket;
