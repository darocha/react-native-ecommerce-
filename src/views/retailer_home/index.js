import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicator,
	Alert

} from 'react-native';


import { Actions } from 'react-native-router-flux';

export default class RetailerHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title:'Home'
		}
	}


	render() {
		const data = [
            { key: 'User', label: 'Buyer' },
            { key: 'Retailer', label: 'Retailer' },
            { key: 'Supplier', label: 'Supplier' },
            
        ];
    console.log(this.state);

		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.titleText}>
						{this.state.title}
					
					</Text>
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
	titleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    alignSelf: 'center'
  },
	footer: {
		//flex: 1,
		backgroundColor: '#00A4D3',
		height: 60,
	},
	tableContents: {
		flex: 1,
		backgroundColor: 'white',
		paddingLeft:10,
		paddingRight:10
	},
	pickerDesc:{
		marginTop:20,
		marginBottom:5
	},
	pickerStyle:{
		height:150,
		borderColor:'#f00',
		borderWidth:1
	},

  textInput:{
  	borderWidth:1, 
  	borderColor:'#ccc', 
  	paddingLeft:10,
  	paddingRight:10, 
  	marginTop:10,
  	height:30},
  buttonGroup:{
		marginTop:10,
		borderColor:'#0ff',
 		borderRadius:10,
		
		backgroundColor:'#00A4D3',
		
  },
 	buttonText:{
 		color:'white',
 		fontSize:16,
 		textAlign:'center',
		marginTop:10,
		marginBottom:10,
		marginLeft:20,
		marginRight:20,
 	}
});

