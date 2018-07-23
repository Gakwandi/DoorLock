import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';

export default class Form extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'', 
      password:''       
    }
  }
  
  userRegister = () =>{
    //alert('ok'); // version 0.48
    
    const {username} = this.state;
    const {email} = this.state;
    const {password} = this.state;

    //axios test
   /*axios.post(
        'http://192.168.10.2:8082/api/clients', 
        {
           'username': 'helloworld',
           'email': 'value22@gmail.com',
           'password': 'helllllo'
           //other data key value pairs
        },
        {
           headers: {
               'Accept': 'application/json',
               'Content-type':'application/json'
                //other header fields
           }
        }
    ).then((response) => response.json())
   .then((responseJson) =>{
      console.error(responseJson);
   })    
    .catch((error) => {
      console.error(error)
    });
    const user = {
      "username" : "fdfd", 
      "email" : "fdfdf@ccccv.fgfg",
      "password" : "fdfdfd"
    }*/
    /*(async () => {
        const rawResponse = await fetch('http://192.168.10.2:8082/api/clients', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: 'comon', email: 'Textual@ff.com', password:'fdfdfdf'})
        });
        const content = await rawResponse.json();

        console.log(content);
    })();
    */
    fetch('http://192.168.10.2:8082/api/clients', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson))
            }).catch((error) => {
                alert(error);
        });
    /*fetch('http://192.168.10.2:8082/api/clients', {
      method: 'POST',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        'username':'username',
        'email':'ehre@gdfdfd.com',
        'password':'mfdfdmfndfndfmndf'                             
      })      
    })
    .then((response) => response.json())
    .then((responseJson) =>{
      console.error(responseJson);
    })
    .catch((error)=>{
      console.error(error);
    });
   */ 
  }
  render() {
    return (
        <View style={styles.container}>
          {this.props.type=='Signup' &&
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor ="#ffffff"
              selectionColor="#ffffff"
              onChangeText={username => this.setState({username})}
              onSubmitEditing={()=> this.email.focus()}
              />
          }
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email adress..."
              placeholderTextColor ="#ffffff"
              selectionColor="#ffffff"
              keyboardType="email-address"
              onChangeText= {email => this.setState({email})}
              onSubmitEditing={()=> this.password.focus()}
              ref={(email)=> this.email = email}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor ="#fff"
              selectionColor="#fff"
              onChangeText= {password => this.setState({password})}
              ref={(input) => this.password = input}
              /> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.userRegister}>{this.props.type}</Text>
          </TouchableOpacity> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    color: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 16
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
});