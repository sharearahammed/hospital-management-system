

export default function ProfileCard(){
    return(
        <>
        
<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://img.freepik.com/premium-vector/art-illustration_890735-11.jpg?w=740" alt="John Doe"/>
        </div>
        <div class="p-2">
            <a href="../doctor/updateDoctor">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update Info</button>
            </a>
            <a href="../doctor/deleteDoctor">
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete account</button>
            </a>
            

        </div>
    </div>
</div>

</div>
        </>
    )
}

