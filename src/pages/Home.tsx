import React from 'react'
import { View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from "@react-navigation/native"

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    React.useEffect(() => {

        navigation.setOptions({
            headerLeft: () => <Ionicons name="log-out-outline" size={32} onPress={() => navigation.goBack()} />,
            headerRight: () => <Ionicons name="add-circle-outline" size={32} onPress={() => navigation.navigate('user')} />
        })

    }, [])

    return (
        <View></View>
    )
}