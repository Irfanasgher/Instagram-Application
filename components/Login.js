import React, { Component } from 'react'
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
class Login extends Component {
    render() {
        return (
            <View>
                <View>
                <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{height:"100%",width:"100%",}}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:40,marginTop:100,color:"white",}}>Welcome here!</Text>
                <TextInput placeholder="Email" style={{borderWidth:1,color:"white",borderColor:"white",width:"90%",marginTop:100,height:50,borderRadius:100,paddingLeft:20 }}/>
                <TextInput placeholder="Password" style={{borderWidth:1,borderColor:"white",color:"white",width:"90%",marginTop:50,height:50,borderRadius:100,paddingLeft:20 }}/>
                <Text style={{color:"white",marginLeft:200,marginTop:20}}>Forget Password?</Text>
                <TouchableOpacity style={{width:"40%",height:40,alignItems: 'center',borderWidth:2,marginTop:20,marginLeft:5,borderColor:"white",borderRadius:100}}
                    
                >
                    <Text style={{color:"#ffff",padding:8}}
                        onPress={() => {console.log(this.props, "pressed")
                        this.props.navigation.navigate('Home')}}
                    >
                    Login                        
                    </Text>
                    
                    
                </TouchableOpacity>
                <TouchableOpacity style={{width:"40%",height:40,alignItems: 'center',borderWidth:1,marginTop:40,borderColor:"white",borderRadius:100}}
                    
                >
                    <Text style={{color:"#ffff",padding:8}}
                        onPress={() => {console.log(this.props, "pressed")
                        this.props.navigation.navigate('Home')}}
                    >
                    Sign UP                        
                    </Text>
                    
                    
                </TouchableOpacity>

                </View>
                </LinearGradient>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default Login;