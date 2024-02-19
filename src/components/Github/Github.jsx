import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/PriyeshRai369')
    //     .then(responce=>responce.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()
    return(
        <div className="flex justify-center align-middle text-center">
            <h1 className="text-center" >Github: {data.followers} </h1>
            <img src={data.avatar_url} alt="" width="100px" />
        </div>
    )
}

export const githubInfo = async ()=>{
    const responce =await  fetch('https://api.github.com/users/PriyeshRai369')
    return responce.json()
}