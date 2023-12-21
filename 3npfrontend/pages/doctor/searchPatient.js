import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserLayout from '../Layout/userlayout';

export default function NavBartwo({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => { 
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'searchPatient',
      query: { inputValue: inputValue }
    });
  }
  
  return (
    <>
     
      
      <div class="">
        
<form onSubmit={handleFormSubmit}>
<div class="mb-3">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      value={inputValue} onChange={handleInputChange}
      type="search"
      class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />


    <button
      class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
</form>






    
      {data.status == null? 
   <UserLayout  filename={data.filename}
   name={data.name}
   email={data.email}
   address={data.address}/>
        : data.status}
     
        </div>

        
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT+'/doctor/searchDoctorBy/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:""}
    }
  };
}
}