import TempBg from '@/public/images/bg-today-small.svg'
import TempBgLarge from "@/public/images/bg-today-large.svg"
import Image from 'next/image'
import { CurrentWeatherData } from '@/app/util/types'
import { dateToString } from '@/app/util/DateConversions'
import { TempDisplay } from './TempDisplay'
import { CurrentInfoCards, CurrentInfoCardsSkeleton } from './CurrentInfoCards'
import { WCtoIcon } from '@/public/images/WeatherCode'
import { Loader } from 'lucide-react'


type CurrentDisplayProps = {
    data:CurrentWeatherData
}





export default function CurrentDisplay({data}:CurrentDisplayProps){

   

    return(
        <div className="max-w-200 flex flex-col csm:flex-row cmd:flex-col gap-6">
            <div className="flex relative h-72">
                <Image src={TempBg} alt={"temp"} className='cmd:hidden sm:min-w-85.75 -z-50'/>
                <Image  src={TempBgLarge} alt={"temp"} className='hidden cmd:block  -z-50'/>
                <div className='flex flex-col w-85.75 cmd:flex-row cmd:w-full justify-between items-center absolute h-full px-8 py-10'>
                    <div className='min-w-69.75 flex flex-col items-center md:items-baseline'>
                        <h2 className='font-sans font-bold text-[1.75rem]'>{`${data.name}, ${data.country}`}</h2>
                        <h3 className='font-sans text-gray-400 text-lg'>{dateToString(data.time)}</h3>
                    </div>
                    <div className='flex relative items-center justify-between w-fit h-1/2 '>
                        <Image src={WCtoIcon(data.weather_code) ?? ""} alt={"Sunny"} className='w-3/7'/>
                        <TempDisplay value={data.temperature_2m}/>
                    </div>
                </div>
            </div>
            <CurrentInfoCards data={data}/>
        </div>
    )
}

export const CurrentDisplaySkeleton = () => {

    return(
        <div className='max-w-200 flex flex-col csm:flex-row cmd:flex-col gap-6'>
            <div className="flex flex-col items-center justify-center sm:min-w-85.75 w-85.75 h-72 cmd:w-199 bg-light-bg rounded-2xl border border-border-color">
                <div className='flex flex-col gap-3'>
                    <Loader className='self-center'/>
                    Loading...
                </div>
            </div>
            <CurrentInfoCardsSkeleton/>
        </div>
    )
    
}