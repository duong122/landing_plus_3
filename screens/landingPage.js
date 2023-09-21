import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

function App({navigation})  {
    return (
        <View style={styles.container}>
          <Image style={styles.iconStyle} source={require('../assets/icons8-restaurant-menu-101.png')}/>
            <View style={styles.content}>
                <Text style={styles.upperText}>
                Welcome to our restaurant
                </Text>
                <View style={styles.length}>
                    <Text style={styles.lowerText}>
                        Order food and make reservations
                        with one click.
                    </Text>
                </View>
                
            </View>

            <View style={styles.buttonOptions}>
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.textLogin}> Log in </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSignUp} onPress={() => navigation.navigate('signUp')}>
                    <Text style={styles.textSignUp}> Sign up</Text>
                </TouchableOpacity>               
            </View>          
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    upperText: {
        textAlign: 'center',
        color: '#5EA33A',
        marginVertical: 24,
    },
    length: {
        width: 250,
    },
    lowerText: {
        textAlign: 'center',
        color: '#000',
        marginVertical: 20,
    },
    btnLogin: {
        width: 278,
        paddingVertical: 12,
        backgroundColor: '#5EA33A',
        marginBottom: 40,
        borderRadius: 25,
    },
    textLogin: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        fontSize: 17,
    },
    btnSignUp: {
        width: 278,
        paddingVertical: 12,
        marginBottom: 40,
        borderRadius: 25,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,

    },
    textSignUp: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
        fontSize: 17,
    },
});

export default App;