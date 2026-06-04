import { UnitPreferences } from "./types";



export const temp = (tempC:number, preferences:UnitPreferences) => {
    const {overall, temp} = preferences

    if(overall === "imperial" || (!overall && temp === "f")){
        return tempC * (9/5) + 32
    }

    return tempC
}

export const precip = (precipMm:number, preferences:UnitPreferences) => {
    const {overall, precip} = preferences

    if(overall === "imperial" || (!overall && precip === "in")){
        return precipMm / 25.4
    }

    return precipMm
}

export const speed = (speedKph:number, preferences:UnitPreferences) => {
    const {overall, speed} = preferences

    if(overall === "imperial" || (!overall && speed === "mph")){
        return speedKph / 1.609
    }

    return speedKph
}
