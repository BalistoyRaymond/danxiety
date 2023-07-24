import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { View } from 'react-native-web';
import KOLORS from '../../../src/shade';

const Registrain = ({ navigation }) => {
    return (
        <SafeAreaView style={{backgroundColor: KOLORS.white, flex: 1}}>
            <ScrollView 
            contentContainerStyle={{
                paddingTop: 50, 
                paddingHorizontal: 20,
                }}>
                    <Text style={{color: KOLORS.black, fontSize: 32, fontWeight: 'bold'}}>
                        SIGN UP
                        </Text>
                    <View style={{marginVertical: 20}}>
                        <input1 placeholder="Email" iconName="email-outline"  label="Email Address"/>
                        <input1 placeholder="Password" iconName="lock-outline"  label="Password"
                        password/>
                        <input1 placeholder="Confirm Password" iconName="lock-outline"  label="Confirm Password"
                        confirmpassword/>
                        <button2 title = "Sign Up"/>
                        <Text style={{color: KOLORS.black, textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>
                            Already have an account? Sign in</Text>
                    </View>
                </ScrollView>

        </SafeAreaView>
    );
};

export default Registrain;