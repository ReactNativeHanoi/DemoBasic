import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkItem from './WorkItem';

export default class WorkList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            searchItems: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://192.168.5.107:3000/works')
        .then((res)=> res.json())
        .then((resJson)=> {
            this.setState({items: resJson, searchItems: resJson});
        }).done();
    }

    renderSearchList() {
        const { items } = this.state;
        let searchItems = [];
        for ( let item of items ) {
            if ( item.type.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 ) {
                searchItems.push(item);
            }
        }
        clearTimeout(this.setSearch);
        setSearch = setTimeout(()=> {
            this.setState({searchItems, search: this.props.search});
        }, 10);
        
    }

    // componentWillReceiveProps() {
    //     this.renderSearchList();
    // }

    render() {
        const { searchItems } = this.state;
        if ( this.props.search !== this.state.search ) {
            this.renderSearchList();
        }
        return(
            <View style={styles.container}>
                <FlatList 
                    data = {searchItems}
                    renderItem={({item})=> <WorkItem type={item.type} city={item.city} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        borderWidth: StyleSheet.hairlineWidth * 2,
        borderColor: '#3c3c3c',
        marginTop: 11,
    }
});