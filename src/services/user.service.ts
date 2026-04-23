import { User } from "../models"
import { getSigned } from "./auth.service"

const URL = 'http://192.168.0.53:3030/users'

export async function getList() {

    const signed = await getSigned()
    const token = signed?.token

    const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (response.ok) {
        return await response.json() as User[]
    }

    throw new Error('Token expired!')
}