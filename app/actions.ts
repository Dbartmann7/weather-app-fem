import { cookies } from "next/headers"

export const setCookie = async (key:string, value:string) => {
    "use server"

    const cookieStore = await cookies()
    cookieStore.set(key, value)
}