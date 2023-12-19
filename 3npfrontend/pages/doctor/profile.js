import React from "react"
import { useEffect } from "react"
import axios from 'axios';
export default function Profile() {
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
 
 
      <h1>This CSR request!</h1>
      {data !== null &&
<div>
{Array.isArray(data) ? "printArray(jsonData)":"printObject(jsonData)"}
</div>}
 
      <ul>
 
        {data.map(item => (
          <li key={item.id}>
         <h1>Name: {item.name}</h1>  
          <h1>Email: {item.username}</h1>
            </li>
        ))}
      </ul>
    </>
  )
}