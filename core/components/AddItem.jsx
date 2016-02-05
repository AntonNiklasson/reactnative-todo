'use strict';

import React, { Text, TextInput, View } from 'react-native';
import styles from '../styles';
import Button from 'react-native-button';


class AddItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	render() {
		return (
			<View style={styles.additem}>
				<TextInput
					value={this.state.text}
					placeholder='New Item...'
					autoFocus={false}
					style={styles.additeminput}
					onChangeText={(text) => this.setState({text})}
					//onSubmitEditing={this.submitHandler}
					onSubmitEditing={this.submitHandler}
				/>
			</View>
		);
	};


	submitHandler = (event, element) => {
		var text = event.nativeEvent.text;

		if(text.length > 0) {
			this.props.addItem(text);
			this.setState({text: ''});
		}
	};
}

AddItem.PropTypes = {
	addItem: React.PropTypes.func.isRequired
};


export default AddItem
