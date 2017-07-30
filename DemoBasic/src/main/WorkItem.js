import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class WorkItem extends Component {
    render() {
        const { type, city } = this.props;
        return(
            <TouchableOpacity 
                activeOpacity={0.9}
                style={styles.item}>
                <Text>
                    <Text>Loại công việc: </Text>
                    <Text>{type}</Text>
                </Text>
                <Text>
                    <Text>Thành phố: </Text>
                    <Text>{city}</Text>
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#949596',
        padding: 7,
        minHeight: 42,
        justifyContent: 'center'
    }
});