import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LikedLocationsButton({navigation}){
    return(
        <>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text 
                onPress={()=>{
                        navigation.navigate('Curtidos')
                    }
                }
                style={styles.buttonTxt}>
                    Meus lugares curtidos
                </Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{
        marginBottom: 20

    },
    buttonTxt:{
        fontSize: '22px',
        color: '#899436',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign:'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '7px',
        border: '1px solid #899436',
        padding: '1%',
        margin: 'auto'
    }
})
