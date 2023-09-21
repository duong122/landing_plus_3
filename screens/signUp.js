import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

function App({navigation})  {

    const [fullname, setFullname] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [EmailAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');

    const handleFullNameChange = (text) => {
        setFullname(text);
    };

    const handlePhoneNumber = (text) =>{
        setPhoneNumber(text);
    };

    const handleEmailAddress = (text) =>{
        setEmailAddress(text);
    };

    const handlePassword = (text) => {
        setPassword(text);
    };

    

    const storeData = async () => {
        console.log("Calling storeData");
        const UserInfo = {
            fullName: fullname,
            phoneNumber: PhoneNumber,
            emailAddress: EmailAddress,
            passWord: Password,
        };

        console.log("User data: ", UserInfo);

        try{
            const jsonvalue = JSON.stringify(UserInfo)
            await AsyncStorage.setItem('user', jsonvalue);
        }
        catch(e){
            console.log("Error: ", e);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textSignIn}>Create new account</Text>

            <View style={styles.input}>
                <View style={styles.userName} >
                    <TextInput style={styles.dataUser} onChangeText={handleFullNameChange} placeholder='Full name' />
                </View>

                <View style={styles.userName}>
                    <TextInput style={styles.dataUser} onChangeText={handlePhoneNumber} placeholder='Phone number' />
                </View>

                <View style={styles.userName}>
                    <TextInput style={styles.dataUser} onChangeText={handleEmailAddress} placeholder='Email address' />
                </View>

                <View style={styles.userName}>
                    <TextInput style={styles.dataUser} onChangeText={handlePassword} placeholder='Password' />
                </View>
            </View>

            <View style={styles.optionButtons}>
                <TouchableOpacity style={styles.btnLogin} onPress={storeData}>
                    <Text style={styles.textLogin}> Sign up </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        alignItems: 'center',
        
    },
    textSignIn: {
        color: '#5EA33A',
        fontSize: 20,
        fontWeight: '400',
        position: 'absolute',
        left: 20,
        top: 0,
    },
    input: {
        marginTop: 40,
    },
    dataUser: {
        width: 298,
        height: 40,
        borderWidth: 1,
        borderRadius: 25,
        marginVertical: 10,
        borderColor: '#777',
        paddingStart: 20,
    }, 
    optionButtons: {
        position: 'relative',
    },
    btnLogin: {
        width: 278,
        paddingVertical: 8,
        backgroundColor: '#344D91',
        marginVertical: 24,
        borderRadius: 25,
    },
    textLogin: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        fontSize: 17,
    },

});

export default App;