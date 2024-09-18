import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Navbar/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import AppDownload from '../../Components/AppDownload/AppDownload'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'



const Home = () => {

  const[category,setCategory]=useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu  category={category} setCategory={setCategory}/>
         <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home