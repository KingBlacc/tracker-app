import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationEvents} from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}/>
            <AuthForm
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign Up'
                onSubmit={signup}
            />
            <NavLink
                routeName='Signin'
                linkText='Already have an account? Sign in instead!'/>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return ({
        header: null
    });
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;