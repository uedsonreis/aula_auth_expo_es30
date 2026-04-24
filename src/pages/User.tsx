import React from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as userService from '../services/user.service'
import MyInput from '../components/MyInput'
import { User } from '../models'

export default function UserPage() {

    const navigation = useNavigation<any>()
    const route = useRoute()

    const user = route.params as User

    const [name, setName] = React.useState(user ? user.name : '')
    const [username, setUsername] = React.useState(user ? user.username : '')

    let password = ''
    let passConfirm = ''

    function save() {
        if (!name || name.trim() === '') {
            Alert.alert('Nome é requerido!')
            return
        }

        if (user) {
            userService.update({ id: user.id, name, username }).then(isSaved => {
                navigation.goBack()
            }).catch(error => {
                navigation.popToTop()
            })

        } else {
            if (!username || username.trim() === '') {
                Alert.alert('Login é requerido!')
                return
            }
            if (!password || password.trim() === '') {
                Alert.alert('Senha é requerida!')
                return
            }
            if (password !== passConfirm) {
                Alert.alert('Senha não confere!')
                return
            }
        
            userService.create({ name, username, password }).then(isSaved => {
                if (isSaved) {
                    navigation.goBack()
                } else {
                    Alert.alert('Usuário já cadastrado!')
                }
            }).catch(error => {
                navigation.popToTop()
            })
        }
    }

    return (
        <View style={styles.container}>
            <MyInput label='Name' value={name} onChangeText={setName} />
            <MyInput label='Login' value={username} onChangeText={setUsername} readOnly={!!user} />

            { !user && (
                <>
                    <MyInput label='Senha' onChangeText={value => password = value} secureTextEntry />
                    <MyInput label='Confirmar Senha' onChangeText={value => passConfirm = value} secureTextEntry />
                </>
            )}

            <View style={styles.viewButton}>
                <Button title='Salvar' onPress={save} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    viewButton: {
        width: '60%',
        marginTop: 20,
    },
})
