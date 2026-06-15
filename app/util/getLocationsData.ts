import { LocationReturnType } from "./types";

export const getLocationsData: (location:string) => Promise<LocationReturnType> = async (location:string) => {
   
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
        if(!res.ok){
            let errMsg = ""
            if(res.status.toString().startsWith("4")){
                errMsg = "There was a problem with the request"
            }else if(res.status.toString().startsWith("5")){
                errMsg = "There was a problem with the server"
            }

            return {
                ok:false,
                error:errMsg,
                data:[]
            }
        }
        
        return {
            ok:true,
            data:(await res.json()).results || []
        }
        // let data = await res.json()
        // console.log(data)
        // return data.results || []
  
}   


