import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

function App({navigation})  {
    return (
        <View style={styles.container}>
            <Text style={styles.textSignIn}>Sign in</Text>

            <View style={styles.input}>
                <View style={styles.userName}>
                    <TextInput style={styles.dataUser} value={Text} placeholder='Email or phone number' />
                </View>

                <View style={styles.password}>
                    <TextInput style={styles.dataPassWord} value={Text} placeholder='Password'/>
                </View>
            </View>

            <View style={styles.optionButtons}>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textLogin}> Login </Text>
                </TouchableOpacity>

                <View stye={styles.textOr}>
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