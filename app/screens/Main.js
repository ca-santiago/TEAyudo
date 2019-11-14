

import React, { Component } from 'react'

import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Animated
} from 'react-native';






const localSheet = StyleSheet.create({
	container: {
		flexDirection: 'column',

	},
	configBtn: {
		alignSelf: 'flex-end',
		backgroundColor: '#e6e6',
	},
	btnPlay: {
		width: 250,
		height: 250,
		margin: 15,
		borderRadius: 125,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 15,

		backgroundColor: 'rgb(50,0,200)',
		alignSelf: 'center'
	},
	text: {
		color: 'rgb(255,255,255)',
		fontSize: 40,
	},
	fillAndCenter: {
		width: '100%', height: '100%',
		alignItems: 'center', justifyContent: 'center'
	},
	absoluteFill: {
		backgroundColor: 'rgba(255,255,255, 0)',
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
});



export default class MainView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scale: new Animated.Value(1),
			isAnimated: true,
		}
	}



	componentDidMount = () => {

		// Start the animations
		setTimeout(() => this.animatedPopup(), 1000);

		console.log('Voy a ser montado')
	}

	componentWillUnmount() {
		// this.setState({
		// 	isAnimated: false
		// });
		console.log('Voy a ser desmontado')
	}


	animatedPopup = () => {


		Animated.sequence([

			Animated.spring(
				this.state.scale,
				{ toValue: 1.1, mass: 10 }
			),
			Animated.spring(
				this.state.scale,
				{ toValue: 1, mass: 1 }
			)

		]).start(() => {
			if (this.state.isAnimated) {
				this.animatedPopup();
				// console.log('Fui llamado de retorno')
			}
		});


	}


	_handlePress = () => {
		Actions.activities();
	}

	render() {

		let { scale } = this.state;
		let animatedStyle = {

			transform: [
				{ scale },
			]
		}


		return (
			<View style={{ width: '100%', height: '100%', }}>
				<View style={[localSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
					<Animated.View
						style={[localSheet.btnPlay, animatedStyle]}
					>
						<TouchableOpacity
							onPress={() => { this.props.navigation.navigate('Menu'); }}
							style={localSheet.fillAndCenter}
						>
							<Text style={localSheet.text}>Ir</Text>
						</TouchableOpacity>
					</Animated.View>
				</View>

			</View>
		)
	}
}



export class SettingsScreen extends Component {
	render() {
		return (
			<View>
				<Text> Configurations here </Text>
			</View>
		)
	}
}


