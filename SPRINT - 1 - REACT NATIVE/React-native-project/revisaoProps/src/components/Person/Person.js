const { View, Text, StyleSheet } = require("react-native")


const Person = ({name, age}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text style={styles.text}>Idade: {age}</Text>
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

    text:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'SingleDay_400Regular'
    }
})

export default Person;