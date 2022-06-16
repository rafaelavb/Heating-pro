import React from 'react'



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

      <div className="bio">
      <h3>Heat Pump spec finder</h3>
    </div>
     
    
      <div className="form-container">
        <span>
          <input className="item-input"></input>
          <button className="add">Add</button>
        </span>
      </div>
    
    <div className='info-containers'>
          <div className="info-container1">
            <h3>Info about heat pumps 1</h3> 
          </div> 

       <div className="info-container2">
        <h3>Info about heat pumps 2</h3> 
       </div>  
    </div>
    </>
  )
}

export default App
