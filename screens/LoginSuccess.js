import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

function App(){
    return(
        <View style={styles.wrap}>
            <Text>Login successfully</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default App;