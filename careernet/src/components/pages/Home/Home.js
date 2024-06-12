import React from 'react'
import Coverpage from './Coverpage'
import ServicePage from './ServicePage'
import Words from './Words'
import Slidelogos from './Slidelogos'
import ThoughtCentre from './ThoughtCentre'
import Navbar from '../../Common/Navbar'
import Footer from '../../Common/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Coverpage/>
        <ServicePage/>
        <Words/>
        <Slidelogos/>
        <ThoughtCentre/>
        <Footer/>


    </div>
  )
}

export default Home