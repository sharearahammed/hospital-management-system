

export default function ProfileNavbar() {

  

  const handleLogout = () => {

    
    router.push('../doctor/login');
  };
  
  return (
    <>
     
      
      <div class="">


      <div class="navbar bg-base-100 bg-white">
  <div class="flex-1">
    <a class="btn btn-white text-xl">Health Care</a>
  </div>
  <div class="flex-none gap-2">
 
  <div class="form-control">
    <a href="../doctor/searchPatient/"><button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Search
    </button>
    </a>
      
    </div>
  
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.freepik.com/premium-vector/art-illustration_890735-11.jpg?w=740" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between" href="../Layout/profileCard"  >
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="../doctor/authcontext"><button onClick={handleLogout}>Logout</button></a></li>
      </ul>
    </div>
  </div>
</div>

     
        </div>

        
    </>
  );
}
