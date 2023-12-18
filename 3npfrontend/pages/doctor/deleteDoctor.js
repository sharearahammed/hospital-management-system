import { useState } from 'react';
import axios from 'axios';

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
    
     const response = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT +'/doctor/deleteDoctor/1');
     console.log('Data deleted successfully');
     } catch (error) {
     console.error(error);
     }
    }


  return (
    <>
     <title page="Delete"> </title>

     <section class="h-screen">
  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      
      <div  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Delete your Account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmitdelete}>


                  {error && <p>{error}</p>}
                  <div align="center">
                  <button type="submit" class="bg-green-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:scale-95">Update</button>
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