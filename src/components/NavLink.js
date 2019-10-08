import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Spacer from './spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, linkText, routeName}) => {
    return(
        <View>
            <TouchableOpacity
            onPress= {() => navigation.navigate({routeName})}>
                <Spacer>
                <Text style={styles.link}>{linkText}</Text>
                </Spacer>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        fontSize: 15
    }
});

export default withNavigation(NavLink);