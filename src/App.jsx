
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import { useState } from 'react'
import TournamentBracket from './Componentes/TournamentBracket/TournamentBracket.jsx'
import TournamentBracket2 from './Componentes/TournamentBracket2/TournamentBracket2.jsx'
import TournamentBracket3 from './Componentes/TournamentBracket3/TournamentBracket3.jsx'

function App() {

  const [ activeTab, setActiveTab ] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch(activeTab) {
      case 'Tab 1':
        return <TournamentBracket fase='races' />
      case 'Tab 2':
        return <TournamentBracket2 fase='drives' />
      case 'Tab 3':
        return <TournamentBracket3 fase='team' />
    }
  }
  

  return (
    <>
      <Header />

      <div className='conteudo'>

      <h1>
        Formula 1 - 2023
      </h1>

      <section className="knockout_table">

        <div className="tabs">
        <button
         className={ activeTab === 'Tab 1' ? 'active' : '' }
         onClick={() => handleChangeTab('Tab 1')}
        >
          Races
        </button>

        <button
         className={ activeTab === 'Tab 2' ? 'active' : '' }
         onClick={() => handleChangeTab('Tab 2')}
        >
          Drivers
        </button>

        <button
         className={ activeTab === 'Tab 3' ? 'active' : '' }
         onClick={() => handleChangeTab('Tab 3')}
       >
          Team
        </button>

      </div>

      <div className='tab_content'>
          { renderTabContent() }
        </div>
        
      </section>
      </div>
      
    </>
  )
}

export default App
