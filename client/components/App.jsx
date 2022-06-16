import React from 'react'
import Home from './Home'
import QueryContainer from './QueryContainer'

function App() {
  return (
    <>
    {/* logo at top of page */}
    <div>
    <img className="logo" src="/images/r1-heat.png" alt="A coloured globe of the earth spinning around on its axis"/>
    </div>


     <div className="title">
       <h1>Heat Pro</h1>
      </div>

      <div className="main">
        <Home />
      </div>
     
      <div>
        <QueryContainer />
      </div>

      <div>
       <h1>heat pump table</h1> 
      </div>      
    </>
  )
}

export default App
