import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/spacer';
import { Context as AuthContext} from '../context/authContext';
import {Entypo} from '@expo/vector-icons';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView
            forceInset={{top: 'always'}}>
            <Spacer>
            <Text h4>Account Screen</Text>
            </Spacer>
            <Spacer>
                <Button
                    title='Sign Out'
                    onPress={signout}/> 
            </Spacer>   
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Entypo name='user' size={20}/>
};

const styles = StyleSheet.create({});

export default AccountScreen;