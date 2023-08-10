import React from 'react'
import Home from '../Components/Home'
import Services from '../Components/Services'
import Contact from '../Components/Contact'
import FeaturedProducts from '../Components/FeaturedProducts'



const HomePage = () => {
  return <main>
    <Home></Home>
    <FeaturedProducts></FeaturedProducts>
    <Services></Services>
    <Contact/>

    {/* <FeaturedProducts></FeaturedProducts>
    <Services></Services>
    <Contant></Contant> */}
  </main>
}

export default HomePage
