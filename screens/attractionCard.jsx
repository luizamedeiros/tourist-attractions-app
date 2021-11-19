import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable, Linking} from 'react-native'

export default function AttractionCardScreen({route, navigation}){
    const {attraction} = route.params;
    return(
        <ScrollView style={styles.card}>
            <View style={styles.infoContainer}>
                <Image style={styles.thumbnail} source={{uri: attraction.images}}/>
                <Text style={styles.info}> <strong> Nome: </strong> {attraction.name}</Text>
                <Text style={styles.info}> <strong> Horário de funcionamento: </strong> {attraction.hours}</Text>
                <Text style={styles.info}> <strong> Valores: </strong>{attraction.price}</Text>
            </View>
            <Pressable onPress={() => Linking.openURL(`tel:${attraction.number}`)}>
            <Text style={styles.button}> Ligar </Text>
            </Pressable>
            <Pressable  onPress={() => Linking.openURL(`${attraction.site}`)}>
            <Text style={styles.button}> Acessar site </Text>
            </Pressable>
        </ScrollView>
    )
}
export {AttractionCardScreen};

const styles = StyleSheet.create({
    infoContainer: {
        marginBottom: 50
    },
    thumbnail: {
        height: 300,
        width: '100%',
        marginBottom: 30
    },
    card: {
        backgroundColor: 'whitesmoke',
        marginBottom: 30,
        padding: '1%',
        width: '100%'
    },
    info: {
        fontSize: 20,
        margin: 2
    },
    button: {
        fontSize: '22px',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign:'center',
        width: '100%',
        backgroundColor: '#899436',
        borderRadius: '7px',
        border: '1px solid #899436',
        padding: '1%',
        marginBottom: 10
    }

});