'use strict';


import React, { Text, View, ListView } from 'react-native';
import Item from './Item';
import styles from '../styles';
import Button from 'react-native-button';


class ItemList extends React.Component {
	render() {
		if(this.props.items.length == 0) {

			// The items list is empty, display a short message.
			return (
				<View style={styles.itemlistcontainer}>
					<Text style={styles.itemlistemptylabel}>
						No items added yet...
					</Text>
				</View>
			);
		} else {

			// We have items. Transform them to a ListViewDataSource
			var dataSource = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}).cloneWithRows(this.props.items);

			return (
				<View style={styles.itemlistcontainer}>
					<ListView
						dataSource={dataSource}
						renderRow={this.renderItem}
						style={styles.itemlist}
					/>
				</View>
			);
		}
	};

	renderItem = (item, key, index) => {
		return (
			<Item key={key} index={index} checked={item.checked} body={item.body} removeItem={this.props.removeItem} />
		);
	};
}

ItemList.proptypes = {
	items: React.PropTypes.object.isRequired,
	removeItem: React.PropTypes.func.isRequired
};


export default ItemList
