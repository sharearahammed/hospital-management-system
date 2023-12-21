import Image from 'next/image'

export default function UserLayout(props) {
   
    return (
        <>

            <div className='p-28'>

                    <div className="mx-auto w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               
                        <div className="flex flex-col items-center pb-10">
                    
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{props.username}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{props.address}</span>
                        </div>
                    </div>
                
            </div>
        </>
    )
}