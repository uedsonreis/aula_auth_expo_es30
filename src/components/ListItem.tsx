import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

import { User } from '../models'

type Props = {
    user: User
    update: (user: User) => void
    remove: (user: User) => void
}

export default function ListItem(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.user.id} - {props.user.name}</Text>
            <Text style={styles.subTitle}>{props.user.username}</Text>
            
            <Ionicons name="person-sharp" color='blue' size={22} onPress={() => props.update(props.user)} />
            <Ionicons name="trash" color='red' size={22} onPress={() => props.remove(props.user)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 16
    },
})