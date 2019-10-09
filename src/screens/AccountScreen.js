import React, { useContext } from 'react';
import {Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/spacer';
import { Context as AuthContext} from '../context/authContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView
            forceInset={{top: 'always'}}>
            <Text>Account Screen</Text>
            <Spacer>
                <Button
                    title='Sign Out'
                    onPress={signout}/> 
            </Spacer>   
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;