import React from 'react'
import { View } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    React.useEffect(() => {

        navigation.setOptions({ headerLeft: () => <></> })

    }, [])

    return (
        <View></View>
    )
}