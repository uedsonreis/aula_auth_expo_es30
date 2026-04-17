import { Alert, Button, StyleSheet, View, Text, TextInput } from 'react-native'

export default function UserPage() {

    let name = ''
    let username = ''
    let password = ''
    let passConfirm = ''

    function save() {
        if (!name || name.trim() === '') {
            Alert.alert('Nome é requerido!')
            return
        }
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

        // Salvar usuário aqui
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} onChangeText={value => name = value} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Login:</Text>
                <TextInput style={styles.input} onChangeText={value => username = value} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={value => password = value} secureTextEntry />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Confirmar Senha:</Text>
                <TextInput style={styles.input} onChangeText={value => passConfirm = value} secureTextEntry />
            </View>

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
