'use strict';

import React, { StyleSheet } from 'react-native';


export default StyleSheet.create({

	shopping: {
		flex: 1,
		backgroundColor: 'White'
	},

	logo: {
		flex: 1,
		margin: 10
	},

	additem: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},

	additeminput: {
		width: 350,
		height: 40,
		backgroundColor: '#EEE',
		borderWidth: 1,
		borderColor: 'Gray',
		margin: 3,
		padding: 5,
		fontWeight: '900',
		fontSize: 20
	},

	itemlistcontainer: {
		flex: 7,
	},

	itemlistemptylabel: {
		color: '#AAA',
		textAlign: 'center',
		fontSize: 20,
		margin: 20
	},

	item: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: 3,
		padding: 5,
		borderTopWidth: StyleSheet.hairlineWidth,
		borderColor: '#CCC'
	},

	itembody: {
		flex: 1,
		color: '#333',
		fontSize: 20
	},

	itembodychecked: {
		textDecorationLine: 'line-through',
		color: '#CCC'
	},

	footer: {
		textAlign: 'center',
		fontSize: 15,
		padding: 10,
		color: 'Crimson',
	}

});
