import { Alert, Button, StyleSheet, View, Text, TextInput } from 'react-native'

export default function LoginPage() {

    let username = ''
    let password = ''

    function signIn() {
        if (username === 'uedson' && password === '123') {
            Alert.alert('Usuário logado com sucess!')
        } else {
            Alert.alert('Login/senha inválido(a)!')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Acesso</Text>

            <View style={styles.inputView}>
                <Text style={styles.label}>Login:</Text>
                <TextInput style={styles.input} onChangeText={value => username = value} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={value => password = value} />
            </View>

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
    title: {
        fontSize: 22,
        marginBottom: 20,
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
