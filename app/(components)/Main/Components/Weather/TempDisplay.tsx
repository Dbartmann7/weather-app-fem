import TempBg from '@/public/images/bg-today-small.svg'
import TempBgLarge from "@/public/images/bg-today-large.svg"
import SunnyIcon from '@/public/images/icon-sunny.webp'
import Image from 'next/image'
import { CurrentWeatherData } from '@/app/util/types'
import { dateToString } from '@/app/util/DateConversions'


type TempDisplayProps = {
    data:CurrentWeatherData
}

export default function TempDisplay({data}:TempDisplayProps){

    


    return(
        <div className="flex relative">
            <Image src={TempBg} alt={"temp"} className='md:hidden sm:min-w-85.75 -z-50'/>
            <Image  src={TempBgLarge} alt={"temp"} className='md:block hidden  min-h-72 -z-50'/>
            <div className='flex flex-col md:flex-row justify-between items-center absolute h-full w-full px-8 py-10'>
                <div className='min-w-69.75 flex flex-col items-center md:items-baseline'>
                    <h2 className='font-sans font-bold text-[1.75rem]'>{`${data.name}, ${data.country}`}</h2>
                    <h3 className='font-sans text-gray-400 text-lg'>{dateToString(data.time)}</h3>
                </div>
                <div className='flex relative items-center justify-between w-fit h-1/2 '>
                    <Image src={SunnyIcon} alt={"Sunny"} className='w-3/7'/>
                    <p className='text-8xl font-semibold font-sans'>{`${data?.temperature_2m}°`}</p>
                </div>
            </div>
        </div>
    )
}