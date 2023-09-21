import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,  Boolean} from 'react-native';



function App({navigation})  {
    const[userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const  handleChangeUserName = (text) =>{
        setUserName(text);
    };

    const handleChangePassword = (text) =>{
        setPassWord(text);
    };

    const Pre_vertify = async () => {
        const jsonvalue = await AsyncStorage.getItem('user');
        const storedUserInfo = JSON.parse(jsonvalue);
        const Username = storedUserInfo.emailAddress;
        const Password = storedUserInfo.passWord;
        console.log("storedUserInfo: ", storedUserInfo);
        return ((userName == Username) && (passWord == Password)) ? storedUserInfo : null;
    };

    const verify = () => {
        const userInfo = Pre_vertify();
        if (userInfo && typeof userInfo === 'object') {
          navigation.navigate('LoginSuccess');
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.textSignIn}>Sign in</Text>

            <View style={styles.input}>
                <View style={styles.userName}>
                    <TextInput style={styles.dataUser} onChangeText={handleChangeUserName} placeholder='Email or phone number' />
                </View>

                <View style={styles.password}>
                    <TextInput style={styles.dataPassWord} onChangeText={handleChangePassword} placeholder='Password'/>
                </View>
            </View>

            <View style={styles.optionButtons}>
                <TouchableOpacity style={styles.btnLogin} onPress={verify}>
                    <Text style={styles.textLogin}> Login </Text>
                </TouchableOpacity>

                <View style={styles.textOr}>
                    <Text style={styles.textOr1}> Or </Text>
                </View>

                <TouchableOpacity style={styles.btnFacebookLogin}>
                    <Text style={styles.textFacebookLogin}> Facebook Login</Text>
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
        // justifyContent: 'center',
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
    dataUser: {
        width: 298,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#777',
        marginTop: 80,
        marginBottom: 20,
        paddingStart: 20,
    }, 
    dataPassWord: {
        width: 298,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#777',
        marginBottom: 24,
        paddingStart: 20,
    },
    optionButtons: {
        position: 'relative',
    },
    btnLogin: {
        width: 278,
        paddingVertical: 12,
        backgroundColor: '#5EA33A',
        marginBottom: 24,
        borderRadius: 25,
    },
    textLogin: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        fontSize: 17,
    },
    btnFacebookLogin: {
        width: 278,
        paddingVertical: 12,
        marginVertical: 28,
        borderRadius: 25,
        backgroundColor: '#344D91',
    },
    textFacebookLogin: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        fontSize: 17,
    },
    textOr1: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '400' ,    
    }

});

export default App;