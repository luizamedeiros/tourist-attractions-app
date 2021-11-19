import React from 'react';
import { Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Pressable } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <>
            <ScrollView 
            style={styles.container}>
                <Image
                style={styles.homeImage}
                source={require('../assets/home.png')}/>
                <Pressable onPress={()=>{
                    navigation.navigate('Lugares')
                }}>
                <Text style={styles.start}
                > turiSCtar!</Text>
                </Pressable>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: '50px',
        marginBottom:'50px'
    },
    homeImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '30px',
        position: 'relative',
        paddingTop: '19.5%',
        paddingBottom: '19.5%',
        paddingLeft: '0',
        width: '50%'
    },
    start:{
        fontSize: '22px',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign:'center',
        width: '50%',
        backgroundColor: '#899436',
        borderRadius: '7px',
        border: '1px solid whitesmoke',
        padding: '1%',
        margin: 'auto'
    }
});