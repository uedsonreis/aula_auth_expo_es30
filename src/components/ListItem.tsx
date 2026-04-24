import { StyleSheet, Text, View } from 'react-native'

import { User } from '../models'

type Props = {
    user: User
    onPress: (user: User) => void
}

export default function ListItem(props: Props) {
    return (
        <View style={styles.container} onTouchEnd={() => props.onPress(props.user)}>
            <Text style={styles.title}>{props.user.id} - {props.user.name}</Text>
            <Text style={styles.subTitle}>{props.user.username}</Text>
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