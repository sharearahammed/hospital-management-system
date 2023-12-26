import { useState } from 'react';
import axios from 'axios';
import ProfileNavbar from '../Layout/profileNavbar'

export default function DeleteUser () {
  const [error, setError] = useState('');

  const handleSubmitdelete = (e) => {
    e.preventDefault();

    deleteData();

    // else if (!validateFile(filename)) {
    //         setError('Please upload a valid file (JPG or PNG format)');
    //       }
  
  };

  async function deleteData() {
   try {
    
     const response = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT +'/doctor/deleteDoctor/4');
     console.log('Data deleted successfully');
     } catch (error) {
     console.error(error);
     }
    }


  return (
    <>
     <title page="Delete"> </title>
     <ProfileNavbar/>
     
     <section align="center" class="h-screen">
  <div class="">
    <div
      class="">
      
      <div  class="">
          <div class="">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Are you sure delete this account?
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmitdelete}>


                  {error && <p>{error}</p>}
                  <div align="center">
                  <button type="submit" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};