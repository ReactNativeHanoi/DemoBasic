import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 100,
    },

    textInputStyle: {
        height: 40,
        alignSelf: "stretch",
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 40,
        paddingHorizontal: 5,
        marginVertical: 2,
        backgroundColor: "azure",
        borderRadius: 5,
    },

    imageStyle: {
        width: 150,
        height: 150,
        // marginVertical: 30,
        marginBottom: 30,
    },

    buttonStyle: {
        paddingVertical: 30,
    },

    textStyle: {
        backgroundColor: "red",
    },
});

export default styles;