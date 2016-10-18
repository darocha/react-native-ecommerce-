import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicator,
	Image,
	ListView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
	constructor(props) {
		super(props);


		this.state = {
			title:'Flower Store',
			userData:[]
		};

	}
	_onLoginButton(){
		Actions.loginClicked();

	}
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.titleText}>
					{this.state.title}
				</Text>
				<TouchableHighlight style={styles.highlightStyle} onPress={this._onLoginButton}>
					<Text style={styles.buttonText}>
						LOG IN
					</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.highlightStyle} onPress={this._onRegisterButton}>
					<Text style={styles.buttonText}>
						REGISTER
					</Text>
					
				</TouchableHighlight>
			</View>)
	}
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
		backgroundColor:'#0cc',
		alignItems:'center',
		justifyContent:'center'
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    alignSelf: 'center'
  },
  highlightStyle:{
  	marginTop:20,
 		alignSelf:'center',
 		borderColor:'#fff',
 		borderRadius:10,
		borderWidth:2,
		backgroundColor:'#8f8f00',
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:20,
		paddingRight:20,
		width:150
  },
 	buttonText:{
 		color:'white',
 		fontSize:16,
 		textAlign:'center'

 	}
});

