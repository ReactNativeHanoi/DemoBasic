import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Platform
} from 'react-native';
import CustomStatusBar from '../common/CustomStatusBar';
import CustomTextInput from '../common/CustomTextInput';
import { styles, MENU_HEIGHT } from '../styles/MainStyles';
import WorkList from './WorkList';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuHeight: 0,
            search: ''
        }
    }

    componentWillMount() {
        if ( Platform.OS === 'android' ) {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    showMenu() {
        LayoutAnimation.spring();
        this.setState({menuHeight: MENU_HEIGHT * 4});
    }

    hideMenu() {
        LayoutAnimation.easeInEaseOut();
        this.setState({menuHeight: 0});
    }

    render() {
        const { menuHeight } = this.state;
        return(
            <View style={{flex: 1}}>
                <CustomStatusBar />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerElemnetContainer}>
                            <Text style={styles.text}>Tên tài khoản</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.9} 
                            style={styles.headerElemnetContainer}
                            onPress={()=> this.showMenu()}>
                            <Text style={styles.text}>Menu</Text>
                        </TouchableOpacity>
                    </View>

                    <CustomTextInput 
                        placeholder="Tìm kiếm" 
                        onChangeText={(search)=> this.setState({search})}
                    />

                    <WorkList search={this.state.search} />

                </View>

                {menuHeight !== 0 ? <View style={styles.menuBlurView} /> : null}
                <View style={[styles.menuOption, {height: menuHeight}]}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('SearchWorks')} 
                        style={styles.option}>
                        <Text style={styles.text}>Tìm việc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.text}>Liên kết</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.text}>Thông báo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> this.hideMenu()} 
                        style={styles.option}>
                        <Text style={styles.specialText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
