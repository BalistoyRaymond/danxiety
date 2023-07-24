import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import KOLORS from "../../src/shade";

const input1 = ({label, iconName, error, password, onfocus = () => {},...props}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
    return( 
        <View style={{marginBottom: 20}}>
            <Text style={style.label}>{label}</Text>
            <View style={[
                style.inputContainer,
                 {
                    borderColor: error 
                        ? KOLORS.red
                        : isFocused 
                        ? KOLORS.darkBlue
                        : KOLORS.light
                }
                ]}>
                <Icon name={iconName}
                style={{fontSize: 22, color: KOLORS.darkBlue, marginRight: 10}}/>
                <TextInput
                    secureTextEntry={hidePassword}
                    autoCorrect={false}
                    onFocus={()=>{
                    onfocus();
                    setIsFocused(true);
                    }}

                    onBlur={()=>{
                    setIsFocused(false);
                    }}
                style={{color: KOLORS.darkBlue, flex: 1}} {...props} />
                {password && (
                    <Icon onPress={() => setHidePassword(!hidePassword)} 
                    style={{fontSize: 22, color: KOLORS.darkBlue}}
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'} />
                )}
                
            </View>
            {error && (
            <Text style={{color: KOLORS.red, fontSize: 12, marginTop: 7}}>{error}</Text>
            )}
        </View>
    )
};

const style = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: KOLORS.grey,
    },
    inputContainer:{
        height: 45,
        backgroundColor: KOLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        alignItems: 'center',
    },
});

export default input1;