import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import RainIcon from "@/public/images/icon-rain.webp"


type ForecastCardProps = {
    weather:string
}


export default function ForecastCard({weather}:ForecastCardProps){




    return(
        <div className="flex flex-col justify-around px-3 py-3 bg-light-bg border border-border-color rounded-xl items-center aspect-2/3">
            <h3>Tue</h3>
            <Image className="w-2/3" src={RainIcon} alt={"Rain"}/>
            <div className="flex flex-row justify-between w-full">
                <p>20</p>
                <p>14</p>
            </div>
        </div>
    )
}