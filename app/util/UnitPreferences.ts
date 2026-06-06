
import { cookies } from "next/headers";
import { UnitPreferences } from "./types";


export const getUnitPreferences = async () => {
    "use server"
    const preferences = (await cookies()).get("unitPreferences")?.value

    if(!preferences){
        return {
            "overall":null,
            "temp":"c",
            "precip":"mm",
            "speed":"mph"
        }
    }

    return JSON.parse(preferences)

}
