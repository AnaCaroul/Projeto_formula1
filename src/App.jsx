
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import { useState } from 'react'

function App() {

  const [ activeTab, setActiveTab ] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch(activeTab) {
      case 'Tab 1':
        return <TournamentBracket fase='corridas' />
      case 'Tab 2':
        return <TournamentBracket fase='corridas' />
      case 'Tab 3':
        return <section className='cards'><Card /></section>
    }
  }
  

  return (
    <>
      <Header />
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
          Past
        </button>

        <button
         className={ activeTab === 'Tab 3' ? 'active' : '' }
         onClick={() => handleChangeTab('Tab 3')}
       >
          Drives
        </button>

      </div>

      {/* <div className='tab_content'>
          { renderTabContent() }
        </div> */}


      </section>
    </>
  )
}

export default App
