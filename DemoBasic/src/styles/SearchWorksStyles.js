import { StyleSheet } from 'react-native';

const BUTTON_BACKGROUND = '#4079ce';
const BUTTON_BORDER_COLOR = '#274b82'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		padding: 7
	},
	button: {
		backgroundColor: BUTTON_BACKGROUND,
		borderWidth: 2,
		borderColor: BUTTON_BORDER_COLOR,
		justifyContent: 'center',
		alignItems: 'center',
		height: 42,
		marginTop: 11
	},
	text: {
		color: 'white',
		fontSize: 14
	}
});

export default styles;