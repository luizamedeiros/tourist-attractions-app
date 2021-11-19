import React, {useEffect, useState} from 'react';
import api from '../services/api';

export default function LikedLocationsScreen({route, navigation}){
    const {attr} = route.params;
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const accessAPI = async ()=>{
        const allAttractions = await api.get("http://192.168.68.117:3000/attractions/");
        const newAttraction = allAttractions.data.map((attr)=>{
            return{
                name: attr.name,
                address: attr.address,
                number: attr.number,
                hours: attr.hours,
                site: attr.site,
                price: attr.price,
                images: attr.images
            };
        });
        setAttractions(newAttraction);
        };
        accessAPI();
    }, []);
    return(
        <>
            {attractions.map((attr)=>(
                
                <View>
                    <TouchableOpacity style ={styles.card} 
                    onPress={()=>{
                        console.log(attr);
                        navigation.navigate('Atração', {attr: attr})
                    }}>
                        <Image style={styles.thumbnail} source={{uri: attr.images}}/>
                        <Text style={styles.title}>{attr.name}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    )
}