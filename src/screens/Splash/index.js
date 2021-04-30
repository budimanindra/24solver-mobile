import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logo from '../../assets/splash.png';

function Splash({navigation}) {
    setTimeout(() => {
        navigation.replace('Home');
    }, 2000);
    return (
        <View style={styles.center}>
            <Image source={Logo} style={styles.logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 150,
        height: 150,
    },
});

export default Splash;
