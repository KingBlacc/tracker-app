// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spacer from '../components/spacer';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback(
        (location) => {
            addLocation(location, recording)
        });
    const [err] = useLocation(isFocused  || recording, callback);

    return (
        <SafeAreaView 
            forceInset={{top: 'always'}}>
            <Spacer>
                <Text h4>Create a Track</Text>
            </Spacer>
                <Map/>
                {err ? <Text h3>Please enable location</Text>: null}
                <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <MaterialCommunityIcons name='map-marker-plus' size={20}/>
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);