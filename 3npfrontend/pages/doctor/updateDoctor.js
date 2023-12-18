import { useState } from 'react';
import axios from 'axios';

export default function UpdateUser () {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };


  const handleUpdate = (e) => {
    e.preventDefault();

    postData();

    // else if (!validateFile(filename)) {
    //         setError('Please upload a valid file (JPG or PNG format)');
    //       }
  
  };

  async function postData() {
   try {
    const res = {
      name:name,
      username:username,
      password:password,
      address:address
    }
     const response = await axios.put(process.env.NEXT_PUBLIC_API_ENDPOINT +'/doctor/updatePutByid/1' ,  res, {
      headers: {
        'Content-Type': 'application/json'

    }
     });
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }


  return (
    <>
     <title page="Registration"> </title>

     <section class="h-screen">
  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      
      <div  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Update your Account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleUpdate}>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="text" name="name" value={name} onChange={handleChangeName} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your fullname" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" name="username" value={username} onChange={handleChangeUsername} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" value={password} onChange={handleChangePassword} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="Address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input type="text" name="address" value={address} onChange={handleChangeAddress} id="address" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>

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