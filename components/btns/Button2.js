import React from 'react';
import { TouchableOpacity } from 'react-native-web';
import KOLORS from '../../src/shade';
const Button = ({title, onPress = () =>{}}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginTop:5,
                paddingVertical: 15,
                borderRadius: 10,
                backgroundColor: KOLORS.darkBlue,
                alignItems:'center',
                justifyContent: 'center',
                elevation:2,
                marginVertical: 20
            }}>
                <Text style={{color: KOLORS.white, fontWeight: 'bold', fontSize: 18}}>
                    {title}</Text>
        </TouchableOpacity>
    );
};