import { User } from "../models"
import { getSigned } from "./auth.service"

const URL = 'http://192.168.0.53:3030/users'

async function getHeaders() {
    const signed = await getSigned()
    const token = signed?.token

    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

export async function getList() {
    const response = await fetch(URL, {
        method: 'GET',
        headers: await getHeaders(),
    })

    if (response.ok) {
        return await response.json() as User[]
    }

    throw new Error('Token expired!')
}

export async function create(user: User) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: await getHeaders(),
        body: JSON.stringify(user)
    })

    if (response.ok) {
        return true
    
    } else if (response.status === 400) {
        return false

    } else {
        throw new Error('Token expired!')
    }
}

export async function update(user: User) {
    const response = await fetch(`${URL}/${user.id}`, {
        method: 'PUT',
        headers: await getHeaders(),
        body: JSON.stringify(user)
    })

    if (response.ok) {
        return true
    
    } else {
        throw new Error('Token expired!')
    }
}
