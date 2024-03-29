

import { apiFetcherOption,apiFetcherResult } from "@common/types/api"
const fetchApi=async <T>({
   url,
    query}:apiFetcherOption):Promise<apiFetcherResult<T>>=>{
    
    const res=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            query
        })
    })
    const {data,errors}=await res.json()
    if(errors){
        throw new Error (errors[0].message ?? errors.message)
    }
    return {data}
    }

    export default fetchApi