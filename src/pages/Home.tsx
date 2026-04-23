import React from 'react'
import { Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from "@react-navigation/native"

import { getList } from '../services/user.service'
import { User } from '../models'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [users, setUsers] = React.useState<User[]>([])

    React.useEffect(() => {
        
        getList().then(list => {
            setUsers(list)
        })

        navigation.setOptions({
            headerLeft: () => <Ionicons name="log-out-outline" size={32} onPress={() => navigation.goBack()} />,
            headerRight: () => <Ionicons name="add-circle-outline" size={32} onPress={() => navigation.navigate('user')} />
        })

    }, [])

    return (
        <View>
            <Text>Temos {users.length} usuários cadastrados.</Text>
        </View>
    )
}