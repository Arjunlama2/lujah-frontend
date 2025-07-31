import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { heroDetails, plan } from '../assets/mockData'
import Card from '../components/Card'
function Home() {
 
  return (
    <div>
        <Header/>
        <Hero data={heroDetails} />
        <Card data={plan}/>
    </div>
  )
}

export default Home