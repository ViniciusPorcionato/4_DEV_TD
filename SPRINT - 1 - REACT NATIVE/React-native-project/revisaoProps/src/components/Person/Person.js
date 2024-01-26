const { View, Text, StyleSheet } = require("react-native")

const Person = ({name, age}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nome: {name}</Text>
            <Text style={styles.title}>Idade: {age}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },

    title:{
        color: 'white',
        fontSize: 20
    }
})

export default Person;