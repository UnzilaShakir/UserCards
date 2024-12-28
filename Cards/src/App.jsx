import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards/Cards';
import Data from './Data';

const App = () => {
  return (
  <>
   <h1 style={{textAlign: "center", marginTop: "30px"}}>Products Cards</h1>

    <div style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px"}}>
    {
    Data.map((e,i) => {
      return <Cards key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} id={e.id}/>

    })
   }



   </div>
  </>
  )
}

export default App;

