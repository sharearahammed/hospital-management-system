import { useState } from 'react';
import axios from 'axios';
import NavBar from '../Layout/navbar'
import Footer from '../Layout/footer'

export default function RegisterPage () {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [file, setFile] = useState(null);
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
  const handleChangeCpassword = (e) => {
    setCpassword(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeSpecialty = (e) => {
    setSpecialty(e.target.value);
  };


  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation

    if (!name || !username || !password || !cpassword || !address || !gender || !age || !specialty || !file) {
      console.log(name, username, password, cpassword, address, gender , age, specialty , file);
      setError('All fields are required');
    }
    else if (password !== cpassword) {
      setError('Passwords do not match');
    }
    else if (!isValidAge(age)) 
    {
      setError('Please enter a valid age between 18 and 100');
    }
    else if (!isValidUsername(username))
    {
      setError('Please enter a valid username (alphanumeric characters only)');
    }

    // else if (!validateFile(filename)) {
    //         setError('Please upload a valid file (JPG or PNG format)');
    //       }
  
  
    else {
     
    try {
      postData()
      setError("user created successfully");
    } catch (e) {
      setError(e);
    }
      setName('');
      setUsername('');
      setPassword('');
      setCpassword('');
      setAddress('');
      setGender('');
      setAge('');
      setSpecialty('');
      setFile(null);
      setError('');
    }
  };

  async function postData() {
   try {
     const formData = new FormData();
     formData.append('name', name);
     formData.append('username', username);
     formData.append('password', password);
     formData.append('cpassword', cpassword);
     formData.append('address', address);
     formData.append('gender', gender);
     formData.append('age', age);
     formData.append('specialty', specialty);
     formData.append('profilepic', document.querySelector('#filename').files[0]);
    console.log(formData);
     const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT +'/doctor/createDoctor' ,  formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
     });
    
     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

    const isValidAge = (age) =>
    {
      return !isNaN(age) && parseInt(age) >= 1 && parseInt(age) <= 100;
    };
    const isValidUsername = (username) => 
    {
      const usernameRegex = /^[a-z0-9]+$/;   
      return usernameRegex.test(username); 
    };

    // const validateFile = (profilepic) => {
           
    //         const allowedtypes = ["image.jpg", "image.png"];
   
    //         if (!allowedtypes.includes(profilepic.type)){
    //             return false;
    //         }
    //     };


  return (
    <>
     <title page="Registration"> </title>
     <NavBar/>

  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
     
      <div align="center" class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://i.pinimg.com/originals/46/0b/ec/460bec2777fe7d4a4fec0dde54fdabde.png"
          class="w-1/2"
          alt="Phone image" />
      </div>

      
      <div  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your Account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
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
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" value={cpassword} onChange={handleChangeCpassword} id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="Address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input type="text" name="address" value={address} onChange={handleChangeAddress} id="address" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="Gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                      <input type="radio" name="gender" value="" hidden checked/>
                      <input type="radio" name="gender" id="male" value = "Male" onChange={handleChangeGender}/><lable>Male</lable>
                      <input type="radio" name="gender" id="female" value = "Female" onChange={handleChangeGender}/><lable>Female</lable>
                      <input type="radio" name="gender" id="notinterest" value = "NotInterested" onChange={handleChangeGender}/><lable>Not Interested.</lable>
                  </div>
                  <div>
                      <label for="Age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                      <input type="number" name="age" value={age} onChange={handleChangeAge} id="age" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="Specialty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialty</label>
                      <input type="text" name="specialty" value={specialty} onChange={handleChangeSpecialty} id="specialty" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                     <label>Upload File</label>
                     <input type="file" name="filename" id="filename" onChange={handleChangeFile} />
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  {error && <p>{error}</p>}
                  <div align="center">
                  <button type="submit" class="bg-green-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 active:scale-95">Create an account</button>
                  </div>
                  <p align="center" class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="login/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
    </div>
  </div>

<Footer/>





    </>
  );
};