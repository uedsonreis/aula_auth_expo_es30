import AsyncStorage from "@react-native-async-storage/async-storage"

import { User } from "../models"

const URL = 'http://192.168.0.53:3030/auth'
const KEY = 'auth@signed'

async function setSigned(signed: User) {
    await AsyncStorage.setItem(KEY, JSON.stringify(signed))
}

export async function getSigned() {
    const json = await AsyncStorage.getItem(KEY)
    if (json) {
        return JSON.parse(json) as User
    }
    return null
}

export async function login(username: string, password: string) {
    const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })

    if (response.ok) {
        const signed = await response.json()
        setSigned(signed)
        return true
    }

    return false
}