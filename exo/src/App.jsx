import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import logo from "./assets/img/logo-deliveroo.png"
import Header from "./assets/components/Header"
import Hero from './assets/components/Hero'
import FullArticle from './assets/components/FullArticle'
import Footer from './assets/components/Footer'


function App() {

const [data,setData]= useState()
const [isLoading,setIsLoading]= useState(true)

useEffect(()=>{

  const fetchData = async ()=>{
    const response = await 
    axios.get("https://site--backend-deliveroo--5p86lc7n4dj5.code.run/")
    setData(response.data)
    setIsLoading(false)
  };
fetchData();
},[])

return isLoading? 
<p>Chargement en cours...</p> : 
 (
<>
<Header logo={logo}/>
<Hero data={data}/>
<main>
  <div className='container main'> 
    <div className='left-main'>  
      {data.categories.map((category, index)=>{
        return category.meals.length >0 && (      
         <FullArticle category={category} index={index} key={index}/>
)})}
    </div>
    <div className='right-main'></div>
  </div>
</main>
<Footer/>
</>
)}

export default App
 