import { StyleSheet, Text, View } from "react-native"


const Games = ({name, category, releaseDate, description}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nome do jogo: {name}</Text>
            <Text style={styles.text}>Categoria: {category}</Text>
            <Text style={styles.text}>Data de Lançmento: {releaseDate}</Text>
            <Text style={styles.text}>Descrição: {description}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#7B68EE',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },

    text:{
        color: '#00008B',
        fontSize: 20,
        fontFamily: 'SingleDay_400Regular'
    }
})

export default Games;