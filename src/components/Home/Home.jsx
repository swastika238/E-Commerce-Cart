import  React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Section from'../Section/Section'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'




const Home = () => {
  return (
    <div>
      <Navbar/>
    <Hero/>
   <Section/>
   <Values/>
   <Products/>
   <Discount/>

  
   

    </div>
  )
}

export default Home
