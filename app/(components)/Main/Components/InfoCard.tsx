type InfoCardProps = {
    label:string,
    value: string
}


export default function InfoCard({label, value} : InfoCardProps){

    return( 
        <div className="bg-light-bg border border-border-color rounded-xl aspect-4/3 px-4 py-4">
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-400">{label}</h3>
                <h2 className="text-gray-300 max-w-max">{value}</h2>
            </div>
        </div>
    )
}