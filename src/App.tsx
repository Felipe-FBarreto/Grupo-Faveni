import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import About from './components/About'
import  './GlobalStyles.css'
import Footer from './components/Footer'
function App() {
  return (
    <div className='container'>
      <Header/>
      <section className='sectionHome'>
        <div className="sectionContainer">
         <Info/>
         <Form/>
        </div>
      </section>
      <About/>
      <Footer/>
    </div>
  )
}

export default App