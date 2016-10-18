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
import ModalPicker from 'react-native-modal-picker'

import { Actions } from 'react-native-router-flux';
import Form from 'react-native-form';
export default class UserRegister extends Component {
	constructor(props) {
		super(props);


		this.state = {
			title:'User Register',
			usertype:'',
			username:'',
			email:'',
			password:'',
		};
		this._onUserRegisterClicked = this._onUserRegisterClicked.bind(this);
	}
	_onUserRegisterClicked(){
		let {usertype, username, email, password}=this.state;
		if((usertype === '') || (username === '') || (email === '' ) || (password === '')){
			Alert.alert(
				'Error',
				'Any field can not be blank.'
				);
		}
		if((usertype === 'Retailer') && (username === 'test') && (email === 'test' ) && (password === 'test')){
			Alert.alert(
				'Success',
				'Thanks for joining us.'
				);
		}
	}
	_onCancelClicked(){
		Actions.main();
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
			
				<View style={styles.tableContents}>
					<Form ref='UserRegister_form'>
						<View>
						  <Text style={styles.pickerDesc}>
									Select User Type
							</Text>
			        <ModalPicker
                data={data}
                initValue="Select user type!"
                onChange={ usertype => 
                		this.setState({usertype:usertype.key})
                }
              >
								<TextInput
              		ref = 'type'
                  style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                  editable={false}
                  placeholder="Select user type!"
                  value={this.state.usertype} />

              </ModalPicker>
						</View>
						<View>
							<TextInput 
								style={styles.textInput} 
								type="TextInput" 
								name="fullName" 
								placeholder="Full Name"
								autoCapitalize='none'
								onChangeText={username => this.setState({username})}
							/>
						</View>
						<View>
							<TextInput 
								style={styles.textInput} 
								type="TextInput" 
								name="emailAddress" 
								placeholder="Email Address"
								autoCapitalize='none'
								onChangeText={email => this.setState({email})}						
								/>
						</View>
						<View>
							<TextInput
								ref='password' 
								style={styles.textInput} 
								type="TextInput" 
								name="password" 
								placeholder="Password"
								autoCapitalize='none'
								secureTextEntry={true}
								onChangeText={password => this.setState({password})}/>
						</View>
					</Form>
					<View style={styles.buttonGroup}>
						<TouchableHighlight onPress={this._onUserRegisterClicked} style={{borderRadius:10}}  underlayColor='#099'>
							<Text style={styles.buttonText}>
								OK
							</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.buttonGroup} >
						<TouchableHighlight onPress={this._onCancelClicked} style={{borderRadius:10}} underlayColor='#099'>
							<Text style={styles.buttonText}>
								Cancel
							</Text>
						</TouchableHighlight>
					</View>
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

