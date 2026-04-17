import { Alert, Button, StyleSheet, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import MyInput from '../components/MyInput'

export default function LoginPage() {

    const navigation = useNavigation<NavigationProp<any>>()

    let username = ''
    let password = ''

    function signIn() {
        if (username === 'uedson' && password === '123') {
            navigation.navigate('home')
        } else {
            Alert.alert('Login/senha inválido(a)!')
        }
    }

    return (
        <View style={styles.container}>
            <MyInput label='Login' onChangeText={value => username = value} />
            <MyInput label='Senha' onChangeText={value => password = value} secureTextEntry />

            <View style={styles.viewButton}>
                <Button title='Entrar' onPress={signIn} />
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
    inputView: {
        width: '90%',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        width: '100%',
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
    },
    viewButton: {
        width: '60%',
        marginTop: 20,
    },
})
