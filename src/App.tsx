import React, { useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import About from './components/About'
import  './GlobalStyles.css'
import Footer from './components/Footer'
import Description from './components/Description'


function App() {

  return (
    <div className='container'>
      <Header/>
      <section className='sectionHome'>
        <div className="sectionContainer">        
            <Description/>
            <Form/>
        </div>
      </section>
      <Info/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App