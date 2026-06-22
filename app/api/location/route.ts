import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest):Promise<NextResponse>{
    let location = req.nextUrl.searchParams.get("location")
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
    // const res = await fetch("https://httpbin.org/status/500")

    if(!res.ok){
  
        let message = ""
        if(res.status.toString().startsWith("5")){
            message = "There was a problem with the server"
        }
        if(res.status.toString().startsWith("4")){
            message = "There was a problem with the request"
        }
        return NextResponse.json({
            ok:false,
            data:[],
            error:message
        })
    }


    let data = await res.json()

    return NextResponse.json({
        ok:true,
        data:data.results || [],
       
    })
}