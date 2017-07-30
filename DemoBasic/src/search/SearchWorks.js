import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CustomStatusBar from '../common/CustomStatusBar';
import CustomTextInput from '../common/CustomTextInput';
import styles from '../styles/SearchWorksStyles';
import WorkList from '../main/WorkList';

export default class SearchWorks extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			searchItems: [],
			city: '',
			town: '',
			field: '',
			type: '',
			wage: '',
			searching: false
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		fetch('http://192.168.5.107:3000/works')
		.then((res) => res.json())
		.then((resJson) => {
			this.setState({ items: resJson });
		}).done();
	}

	isMatchItem(item) {
		const { city, town, field, type, wage } = this.state;
		if ( item.indexOf(city) !== -1 && item.indexOf(town) !== -1 && item.indexOf(field) !== -1 && item.indexOf(type) !== -1 && parseInt(item.wage) >= parseInt(wage) ) {
			return true;
		}
		return false;
	}

	search() {
		const { items } = this.state;
		let searchItems = [];
		for ( let item of items ) {
			if ( this.isMatchItem(item) ) {
				searchItems.push(item);
			}
		}
		this.setState({ searchItems, searching: true });
	}

	render() {
		const { searchItems, searching } = this.state;
		return(
			<View style={{flex: 1}}>
				<CustomStatusBar />
				<View style={styles.container}>
					<CustomTextInput 
						placeholder="Tỉnh/thành phố" 
						onChangeText={(city)=> this.setState({ city })} />
					<CustomTextInput 
						placeholder="Quận/huyện"
						onChangeText={(town) => this.setState({ town})} />
					<CustomTextInput 
						placeholder="Lĩnh vực/ngành nghề"
						onChangeText={(field) => this.setState({ field })} />
					<CustomTextInput 
						placeholder="Loại công việc"
						onChangeText={(type) => this.setState({ type })} />
					<CustomTextInput 
						placeholder="Mức lương"
						onChangeText={(wage) => this.setState({ wage })} />

					<TouchableOpacity
						activeOpacity={0.9}
						style={styles.button}
						onPress={()=> this.search()}>
						<Text style={styles.text}>Tìm việc</Text>
					</TouchableOpacity>

					{!searching ? null : (searchItems.length === 0 ? <Text>Không tìm thấy kết quả !</Text> : <WorkList />) }
				</View>
			</View>
		);
	}
}

