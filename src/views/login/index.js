import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicator,

} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Form from 'react-native-form';
export default class Login extends Component {
	constructor(props) {
		super(props);


		this.state = {
			title:'Login',
			userData:[]
		};

	}
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.titleText}>
						{this.state.title}
					</Text>
				</View>
			
				<View style={styles.tableContents}>
					<Form ref='login_form'>
						<View>
							<TextInput type="TextInput" name="fullName"/>
						</View>
						<View>
							<TextInput type="TextInput" name="emailAddress"/>
						</View>
						<View>
							<TextInput type="TextInput" name="password"/>
						</View>
								<View>
						<TouchableHighlight>
							<Text>Login</Text>
						</TouchableHighlight>
						</View>
				
					</Form>
				</View>


			</View>)
	}
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0cc',
    flexDirection: 'column',
		marginTop:20
  },
	header: {
		backgroundColor: '#00A4D3',
		height: 100,
	
		alignItems:'center'
	},
	footer: {
		//flex: 1,
		backgroundColor: '#00A4D3',
		height: 60,
	},
	tableContents: {
		flex: 1,
		backgroundColor: 'white',
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

