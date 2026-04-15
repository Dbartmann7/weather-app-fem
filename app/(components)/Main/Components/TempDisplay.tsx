import TempBg from '@/public/images/bg-today-small.svg'
import TempBgLarge from "@/public/images/bg-today-large.svg"
import SunnyIcon from '@/public/images/icon-sunny.webp'
import Image from 'next/image'

export default function TempDisplay(){

    return(
        <div className="flex relative">
            <Image src={TempBg} alt={"temp"} className='md:hidden w-full -z-50'/>
            <Image  src={TempBgLarge} alt={"temp"} className='md:block hidden  min-h-72 -z-50'/>
            <div className='flex flex-col items-center gap-3 absolute h-full w-full px-8 py-10'>
                <h2 className='font-sans font-bold'>Berlin, Germany</h2>
                <h3 className='font-sans text-gray-400'>Tuesday, Aug 5, 2025</h3>
                {/* <div className='flex relative items-center justify-between w-full h-1/2 '>
                    <Image src={SunnyIcon} alt={"Sunny"} className='w-1/2'/>
                    <p className='text-7xl italic font-semibold font-sans'>20°</p>
                </div> */}
            </div>
        </div>
    )
}