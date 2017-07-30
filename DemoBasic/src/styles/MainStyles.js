import { StyleSheet, Dimensions, Platform } from 'react-native';

const HAIRLINE_WIDTH = StyleSheet.hairlineWidth;
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const BORDER_COLOR = '#3c3c3c';
const TEXT_COLOR = '#1b1b1b';
const SPECIAL_TEXT_COLOR = '#f73838';
const MENU_WIDTH = 128;
export const MENU_HEIGHT = 42;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 7,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 7,
    },
    headerElemnetContainer: {
        paddingVertical: 7,
        paddingHorizontal: 9,
        borderWidth: 2 * HAIRLINE_WIDTH,
        borderColor: BORDER_COLOR,
        minWidth: MENU_WIDTH,
        minHeight: MENU_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: TEXT_COLOR,
        textAlign: 'center'
    },
    specialText: {
        color: SPECIAL_TEXT_COLOR,
        textAlign: 'center'
    },
    menuOption: {
        minWidth: MENU_WIDTH,
        position: 'absolute',
        right: 7,
        top: Platform.OS === 'android' ? 80 : 76,
        backgroundColor: 'white',
        borderRightWidth: 2 * HAIRLINE_WIDTH,
        borderLeftWidth: 2 * HAIRLINE_WIDTH,
        borderColor: BORDER_COLOR,
    },
    option: {
        height: MENU_HEIGHT,
        borderBottomWidth: 2 * HAIRLINE_WIDTH,
        borderColor: BORDER_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuBlurView: {
        height: DEVICE_HEIGHT,
        width: DEVICE_WIDTH,
        backgroundColor: 'black',
        position: 'absolute',
        top: Platform.OS === 'android' ? 24 : 20,
        left: 0,
        opacity: 0.6
    }
});