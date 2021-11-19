import React, {useEffect, useState} from 'react';
import api from '../services/api';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AttractionListScreen({navigation}){
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const accessAPI = async ()=>{
        const allAttractions = await api.get("http://192.168.68.117:3000/attractions/");
        const newAttraction = allAttractions.data.map((attr)=>{
            return{
                id: attr.id,
                name: attr.name,
                address: attr.address,
                number: attr.number,
                hours: attr.hours,
                site: attr.site,
                price: attr.price,
                images: attr.images,
                liked: attr.liked
            };
        });
        setAttractions(newAttraction);
        };
        accessAPI();
    }, []);

    return(
        <SafeAreaView style={styles.container}>

            <Pressable style={styles.button}>
             <Icon style={styles.icon} name="heart" size={20} color="#899436" />
                <Text 
                onPress={()=>{
                        navigation.navigate('Curtidos')
                    }
                }
                style={styles.buttonTxt}>
                    Meus lugares curtidos
                </Text>
            </Pressable>
            
            <ScrollView>
            {attractions.map((attr)=>(
                <View>
                    <TouchableOpacity style ={styles.card} 
                    onPress={()=>{
                        console.log(attr.id, attr.liked);
                        navigation.navigate('Informações', { attraction: attr})
                    }}>
                        <Image style={styles.thumbnail} source={{uri: attr.images}}/>
                        <Text style={styles.title}>
                            {attr.name} 
                        </Text>
                        
                    </TouchableOpacity>
                </View>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}
export {AttractionListScreen};

const styles = StyleSheet.create({
    buttonTxt:{
        fontSize: '22px',
        color: '#899436',
        fontWeight: 'bold',
        letterSpacing: '1px'
    },
    button: {
        marginBottom: 20,
        textAlign:'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '7px',
        border: '1px solid #899436',
        padding: '1%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        paddingRight: 20
    }
    
    

});