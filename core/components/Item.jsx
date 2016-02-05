'use strict';


import React, {
	Text,
	TextInput,
	View,
	Image,
	TouchableHighlight
} from 'react-native';
import styles from '../styles';
import CheckBox from 'react-native-checkbox';


class Item extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			checked: props.checked || false
		};
	}

	render() {
		return (
			<View style={styles.item}>
				<CheckBox
					label=''
					checked={this.state.checked}
					onChange={this.onCheckedChange}
				/>
				<Text style={this.itemLabelStyle()}>{this.props.body}</Text>
				{this.state.checked ?
					<TouchableHighlight onPress={() => this.props.removeItem(this.props.index)}>
						<Image
							source={require('../../trashbin.png')}
							style={{width: 30, height: 30}}
						/>
					</TouchableHighlight>
				: null }
			</View>
		);
	};


	onCheckedChange = (checked) => {
		this.setState({checked});
	};

	itemLabelStyle = () => {
		var style = styles.itembody;

		if(this.state.checked)
			style = [style, styles.itembodychecked];

		return style;
	};
}

Item.PropTypes = {
	checked: 	React.PropTypes.bool,
	body:    	React.PropTypes.string.isRequired,
	removeItem: React.PropTypes.func.isRequired
};


export default Item
