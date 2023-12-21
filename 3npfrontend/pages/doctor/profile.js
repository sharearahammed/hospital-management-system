import React from "react"
import { useEffect } from "react"
import axios from 'axios';
import ProfileNavbar from '../Layout/profileNavbar'
export default function Profile({router}) {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const getData = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + '/doctor/index',
    {
   
    withCredentials: true
    }
 
    );
    console.log(response)
      setData(response.data);
    }
    getData();
  })
  return (
    <>
    <ProfileNavbar/>
 
 
      <h1>This CSR request!</h1>
      {data !== null &&
<div>
{Array.isArray(data) ? "printArray(jsonData)":"printObject(jsonData)"}
</div>}
 
      <ul>
 
        {data.map(user => (
          
          <li key={user.id}>
         <h1>Name: {user.name}</h1>  
          <h1>Email: {user.username}</h1>
            </li>
        ))}
      </ul>
    </>
  )
}