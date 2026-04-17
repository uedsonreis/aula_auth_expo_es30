import { StyleSheet, View, Text, TextInput, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
    label: string
}

export default function MyInput({ label, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput style={styles.input} {...rest} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
})
