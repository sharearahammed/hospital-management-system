 import Header from "./header"
 import { useState } from "react";
 import { useEffect } from "react";
 import NavBar from './Layout/navbar'
 import Body from './Layout/body'
 import Card from './Layout/card'
 import Footer from './Layout/footer'




export default function Home() {
  const [number,setNumber] = useState(0);
  useEffect(()=>{
    setNumber(10);
  },[]);
  return (
    <>
      <NavBar/>
      <Body/>
      <br></br>
      <Card/>
      <br></br>
      <br></br>
      <Footer/>



    </>
  )
}
