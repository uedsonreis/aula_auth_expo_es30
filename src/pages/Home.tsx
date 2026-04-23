import React from 'react'
import { Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from "@react-navigation/native"

import { getList } from '../services/user.service'
import { User } from '../models'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [users, setUsers] = React.useState<User[]>([])

    function fetchUsers() {
        getList()
            .then(list => setUsers(list))
            .catch(error => navigation.goBack())
    }

    React.useEffect(() => {
        fetchUsers()

        navigation.setOptions({
            headerLeft: () => <Ionicons name="log-out-outline" size={32} onPress={() => navigation.goBack()} />,
            headerRight: () => <Ionicons name="add-circle-outline" size={32} onPress={() => navigation.navigate('user')} />
        })

        navigation.addListener('focus', fetchUsers)
    }, [])

    return (
        <View>
            <Text>Temos {users.length} usuários cadastrados.</Text>
        </View>
    )
}