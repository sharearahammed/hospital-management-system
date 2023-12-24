import { useState } from 'react';
import Header from "../header";
import { useRouter } from 'next/router';
import axios from 'axios';
import NavBar from '../Layout/homeNavbar'
import Footer from '../Layout/footer'

export default function LoginForm () {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const router = useRouter(); 
const handleChangeEmail = (e) => {
setEmail(e.target.value);
};
const handleChangePassword = (e) => {
setPassword(e.target.value);
};
const handleSubmit = async (e) => {
e.preventDefault();
// Perform form validation
if (!email || !password) {
setError('Email and password are required');
} else if (!isValidEmail(email)) {
setError('Invalid email address');
} else {
// console.log({ email, password });
// setEmail('');
// setPassword('');
// setError('');
// router.push('.profile');
const res = await doctorlogin();
console.log(res);
if(res && res.message=="success"){
    console.log("cookie: " + document.cookie);
    //login(email, document.cookie);
    router.push('profile',{res});
}
else{ 
    setError('user not found');
}
}
};
async function doctorlogin() {
    try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT +'/doctor/doctorlogin', {username:email, password :password},
    {withCredentials:true});
    // console.log(response.data);
    return response.data;
    } catch (error) {
    console.error(error);
    }
    }
const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
    };
    return (
    <>
    <NavBar/>
    <link rel="icon" type="image/x-icon" href="hospital.jpg"/>
    <Header title="Login Page"/>

<div class="h-screen">
  <div class="container h-full px-6 py-24">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
     
      <div align="center" class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://i.pinimg.com/originals/46/0b/ec/460bec2777fe7d4a4fec0dde54fdabde.png"
          class="w-1/2"
          alt="Phone image" />
      </div>

      
      <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
        <form onSubmit={handleSubmit}>
          
          <div class="relative mb-6" data-te-input-wrapper-init>
          <input
    type="text" name="email" value={email} onChange={handleChangeEmail}
    class="peer block min-h-[auto] w-full rounded border-0 bg-slate-500 text-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput3"
    placeholder="Email address" />
            <label
              for="exampleFormControlInput3"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-slate-950 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
            </label>
          </div>

         
          <div class="relative mb-6" data-te-input-wrapper-init>
          <input
    type="password" name="password" value={password} onChange={handleChangePassword}
    class="peer block min-h-[auto] w-full rounded border-0 bg-slate-500 text-white px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlInput33"
    placeholder="Password"
/>
            <label
              for="exampleFormControlInput33"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
            </label>
          </div>

          
          <div class="mb-6 flex items-center justify-between">
            <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="checkbox"
                value=""
                id="exampleCheck3"
                checked />
              <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="exampleCheck3">
                Remember me
              </label>
            </div>

           
            <a
              href="#!"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >Forgot password?</a
            >
          </div>

          {error && <p>{error}</p>}
          <button
            type="submit"
            class="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Sign in
          </button>
          <br></br>
        <div align="center" style={{ margin: '20px' }}>
        <p class="inline-block w-full rounded bg-green-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#38a169] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(56,161,105,0.3),0_4px_18px_0_rgba(56,161,105,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(56,161,105,0.3),0_4px_18px_0_rgba(56,161,105,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(56,161,105,0.3),0_4px_18px_0_rgba(56,161,105,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(56,161,105,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(56,161,105,0.2),0_4px_18px_0_rgba(56,161,105,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(56,161,105,0.2),0_4px_18px_0_rgba(56,161,105,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(56,161,105,0.2),0_4px_18px_0_rgba(56,161,105,0.1)]"
          ><a  href="registration/"> Create new account</a></p>

        </div>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer/>




    </>
    );
    };
    