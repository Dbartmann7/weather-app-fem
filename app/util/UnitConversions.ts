import { UnitPreferences } from "./types";



export const temp = (tempC:number, preferences:UnitPreferences) => {
    const {temp} = preferences

    if(temp === "f"){
        return tempC * (9/5) + 32
    }

    return tempC
}

export const precip = (precipMm:number, preferences:UnitPreferences) => {
    const {precip} = preferences

    if(precip === "in"){
        return precipMm / 25.4
    }

    return precipMm
}

export const speed = (speedKph:number, preferences:UnitPreferences) => {
    const {speed} = preferences

    if(speed === "mph"){
        return speedKph / 1.609
    }

    return speedKph
}
