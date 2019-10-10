import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import MapView, {Polyline} from 'react-native-maps';
import {Context as TrackContext} from '../context/TrackContext';

const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const intialCoords = track.locations[0].coords;

    return (
        <>
            <Text h3>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...intialCoords
                }}>
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}/>
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map:{
        height: 300
    }
});

export default TrackDetailScreen;