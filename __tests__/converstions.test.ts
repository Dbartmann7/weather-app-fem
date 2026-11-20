import {describe, it, expect} from 'vitest'
import { dateToDay, dateToHour, dateToMonth, getDayNum } from '@/app/util/Conversions/DateConversions'
import {temp, precip, speed} from '@/app/util/Conversions/UnitConversions'
import { UnitPreferences } from '@/app/util/types'


const imperialPref:UnitPreferences = {
    temp:'f',
    precip:'in',
    speed:'mph'
}
const metricPref:UnitPreferences = {
    temp:'c',
    precip:'mm',
    speed:'km/h'
}

describe('UnitConversions', () => {
    // test converstions from metric to imperial work
    it('converts C to F', () => {
        const C:number = 100
        const F:number = C * (9/5) + 32
        expect(temp(C, imperialPref)).toBe(F)
    })
    it('converts mm to in', () => {
        const mm:number = 100
        const inch:number = mm / 25.4
        expect(precip(mm, imperialPref)).toBe(inch)
    })
    it('converts km/h to mph', () => {
        const kmh:number = 100
        const mph = kmh / 1.609
        expect(speed(kmh, imperialPref)).toBe(mph)
    })

    // test fns return metric value if metric is preferred
    it('keeps C value', () => {
        const C = 100
        expect(temp(C, metricPref)).toBe(C)
    })
    it('keeps mm value', () => {
        const mm = 100
        expect(precip(mm, metricPref)).toBe(mm)
    })    
    it('keeps km/h value', () => {
        const kmh = 100
        expect(speed(kmh, metricPref)).toBe(kmh)
    })        
})



const testDate:Date = new Date("December 17, 1995 03:24:00") // Sunday
describe('DateConversions', () => {

    it('convert date to hour', () => {
        expect(dateToHour(testDate)).toBe("3 AM")
    })
    it('convert date to day', () => {
        expect(dateToDay(testDate)).toBe("Sunday")
    })
    it('convert day to number value', () => {
        const day:string = dateToDay(testDate)
        expect(getDayNum(day)).toBe(0)
    })
    it('convert date to month', () => {
        expect(dateToMonth(testDate)).toBe("December")
    })
})