import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

export default class CustomStatusBar extends React.Component {
    render() {
        return(
            <View style={styles.statusBar} />
        );
    }
}

const STATUS_BAR_BACKGROUND = '#d03e3f';

const styles = StyleSheet.create({
    statusBar: {
        height: Platform.OS === 'ios' ? 20 : 24,
        backgroundColor: STATUS_BAR_BACKGROUND
    }
});