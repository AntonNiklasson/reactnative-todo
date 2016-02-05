import React, { View, Image, Text } from 'react-native';
import styles from '../styles';
import AddItem from './AddItem';
import ItemList from './ItemList';


class Shopping extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [
				{ checked: false, body: 'Buy milk' },
				{ checked: false, body: 'Finish Master Thesis' },
				{ checked: false, body: 'Lorem Ipsum' },
				{ checked: true,  body: 'I\'m just another item' },
				{ checked: false, body: 'Random' },
				{ checked: true,  body: 'Anton' },
				{ checked: false, body: 'Niklasson' },
				{ checked: true,  body: 'MacBook' },
				{ checked: true,  body: 'Hell World.' },
				{ checked: false, body: 'HTC One' },
				{ checked: true,  body: 'Accedo.tv' },
				{ checked: false, body: 'Thesis' },
			]
		};
	}

	render() {
		return (
			<View style={styles.shopping}>
				<Image
					source={{uri: 'http://www.accedo.tv/wp-content/uploads/2013/09/accedo_white.png' }}
					style={styles.logo} />
				<AddItem addItem={this.addItem} />
				<ItemList items={this.state.items} removeItem={this.removeItem} />
				<Text style={styles.footer}>React Native Demo</Text>
			</View>
		);
	};


	addItem = (body) => {
		this.setState({
			items: [{ checked: false, body: body }].concat(this.state.items)
		});
	};

	removeItem = (index) => {
		this.setState({
			items: React.addons.update(this.state.items, {$splice: [[index, 1]]})
		});
	};

}


export default Shopping
