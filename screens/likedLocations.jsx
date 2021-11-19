import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function LikedLocationsScreen({navigation}){
    const [attractions, SetAttractions] = useState([]);

    useEffect(() => {
        const accessAPI = async ()=>{
        const allAttractions = await api.get("http://192.168.68.117:3000/attractions/");
        const newFav = [];
        allAttractions.data.map((attr)=>{
            {if(attr.liked == true){
                newFav.push(attr);
            }};
        })
        SetAttractions(newFav);
        };
        accessAPI();
    }, []);

    return(
        <>   
        <ScrollView>
            {attractions.map((attr)=>(
                <View>
                    <TouchableOpacity style ={styles.card} 
                    onPress={()=>{
                        navigation.navigate('Informações', { attraction: attr})
                    }}>
                        <Image style={styles.thumbnail} source={{uri: attr.images}}/>
                        <Text style={styles.title}>{attr.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
            </ScrollView>
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
    },
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        height:'100%'
    },
    thumbnail: {
        height: 200,
        width: '100%',
        borderRadius: '3px',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '3px',
        padding: '0.7%',
        width: '100%',
        marginBottom: 30,
    },
    title:{
        backgroundColor: '#899436',
        fontSize: 25,
        letterSpacing: '1px',
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: '20px',
        paddingTop: '15px',
        paddingBottom: '22px',
        width: '100%'
    }})