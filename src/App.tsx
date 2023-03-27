import React, { useRef } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import About from './components/About'
import  './GlobalStyles.css'
import Footer from './components/Footer'
import Description from './components/Description'


function App() {

const formRef = useRef(null)
  return (
    <div className='container'>
      <Header/>
      <section className='sectionHome'>
        <div className="sectionContainer">        
            <Description/>
            <Form refForm={formRef}/>
        </div>
      </section>
      <Info/>
      <About/>
      <Footer formRef={formRef}/>
    </div>
  )
}

export default App