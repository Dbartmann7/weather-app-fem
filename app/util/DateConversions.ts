export const dateToString = (date:Date) => {
    return `${dateToDay(date)}, ${dateToMonth(date).slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`
}

export const dateToMonth = (date:Date) => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    return months[date.getMonth()]

}

export const dateToDay = (date:Date | number) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if(date instanceof Date){
        date = date.getDay()
    }
    return days[date]
}

export const getDayNum = (day:string) => {
    const map = new Map<string, number>([
        ["Sunday", 0],
        ["Monday", 1],
        ["Tuesday", 2],
        ["Wednesday", 3],
        ["Thursday", 4],
        ["Friday", 5],
        ["Saturday", 6]
    ])

    return map.get(day) ?? -1
}

export const dateToHour = (date:Date) => {
    let hour = date.getUTCHours()
    let suffix = " AM"

    if(hour > 11){
        suffix = " PM"
    }
    if(hour > 12){
        hour %= 12
    }
    if(hour === 0){
        hour = 12
    }


    return hour + suffix
}