import React, {useState} from 'react';
import { Text, Button, Input} from 'react-native-elements';
import {StyleSheet } from 'react-native';
import Spacer from '../components/spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Spacer>
                <Text h3>{headerText}</Text>
           </Spacer>
           <Input 
                label='Email'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}/>
           <Spacer/>
           <Input 
                label='Password'
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
                secureTextEntry/>
            {errorMessage ? (<Text style={styles.errorMsg}>{errorMessage}</Text>) : null}
           <Spacer>
                <Button 
                    title={submitButtonText}
                    onPress={() => onSubmit({email, password})}/>
           </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMsg: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;