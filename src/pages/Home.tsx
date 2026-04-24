import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FlatList, StyleSheet, Text, View } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"

import * as userService from '../services/user.service'
import ListItem from '../components/ListItem'
import { User } from '../models'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [users, setUsers] = React.useState<User[]>([])

    function fetchUsers() {
        userService.getList()
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

    function goToeditUser(user: User) {
        navigation.navigate('user', user)
    }

    async function removeUser(user: User) {
        try {
            await userService.remove(user.id!)
            fetchUsers()
            
        } catch (error) {
            navigation.goBack()
        }
    }

    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={item => item.username}
                renderItem={({ item }) => <ListItem user={item} update={goToeditUser} remove={removeUser} />}
            />

            <Text style={styles.footer}>Temos {users.length} usuários cadastrados.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        textAlign: 'center',
    },
})