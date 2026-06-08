import drizzle from "@/public/images/icon-drizzle.webp"
import fog from "@/public/images/icon-fog.webp"
import overcast from "@/public/images/icon-overcast.webp"
import partialyCloudy from "@/public/images/icon-partly-cloudy.webp"
import rain from "@/public/images/icon-rain.webp"
import snow from "@/public/images/icon-snow.webp"
import storm from "@/public/images/icon-storm.webp"
import sunny from "@/public/images/icon-sunny.webp"
import { StaticImageData } from "next/image"



export const WCtoIcon:(code:number) => StaticImageData | undefined = (code:number) => {
    let iconMap = new Map<number, StaticImageData>([
        [0, sunny],
        [1, sunny],
        [2, partialyCloudy],
        [3, overcast],
        [45, fog],
        [48, fog],
        [51, drizzle],
        [53, drizzle],
        [55, drizzle],
        [56, drizzle],
        [57, drizzle],
        [61, rain],
        [63, rain],
        [65, rain],
        [66, rain],
        [67, rain],
        [71, snow],
        [73, snow],
        [75, snow],
        [77, snow],
        [80, rain],
        [81, rain],
        [82, rain],
        [85, snow],
        [86, snow],
        [95, storm],
        [96, storm],
        [99, storm],
    ])

    return iconMap.get(code)

}