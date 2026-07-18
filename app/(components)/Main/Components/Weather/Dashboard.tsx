import { WeatherData } from "@/app/util/types"
import CurrentDisplay from "./CurrentDisplay"
import DailyForecast from "./DailyForecast"
import HourlyForecast from "./HourlyForecast"

type DashboardProps = {
    data:WeatherData
}

const Dashboard = ({data}:DashboardProps) => {



    return(
        <div className="flex flex-col xl:flex-row w-full gap-8">
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <CurrentDisplay data={data.current}/>
                </div>
                <DailyForecast data={data?.daily}/>
            </div>
            <HourlyForecast data={data?.hourly}/>
        </div>
    )
}

const DashboardSkeleton = () => {

    return(
        <h1>Loading...</h1>
    )
}

Dashboard.skeleton = DashboardSkeleton


export default Dashboard