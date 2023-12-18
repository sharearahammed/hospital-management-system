import Head from "next/head"

export default function Header({title}){
    return(
        <>
        <Head>
            <link rel="icon" type="image/x-icon" href="hospital.jpg"/>
            <title>{title}</title>
        </Head>
          
        </>
    )
}
