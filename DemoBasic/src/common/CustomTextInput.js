import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default class CustomTextInput extends Component {
    render() {
        return(
            <TextInput 
                {...this.props}
                underlineColorAndroid="transparent"
                style={styles.textInput}
            />
        );
    }
}

const HAIRLINE_WIDTH = StyleSheet.hairlineWidth;
const BORDER_COLOR = '#3c3c3c';
const TEXT_COLOR = '#1b1b1b';

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2 * HAIRLINE_WIDTH,
        borderColor: BORDER_COLOR,
        minHeight: 42,
        paddingHorizontal: 9,
        marginTop: 9
    },
});