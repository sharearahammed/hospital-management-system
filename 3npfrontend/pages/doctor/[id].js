import { useRouter } from "next/router"


export default function Users()
{
    //using (useRouter) hook
    const router = useRouter();
    const {id} = router.query;
    return(
        <>
        <h1> Users {id} </h1>
        </>
    )
}