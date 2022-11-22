import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native'



export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
     return (
       <View style={styles.container}>
           <Image
               style={styles.image}
               source={{uri: 'https://pbs.twimg.com/profile_images/1572130227131654144/Fh3VCSVF_400x400.jpg'}}
           />
         <Text style={styles.logo}>Zing</Text>


          <TouchableOpacity style={styles.loginBtn1}>
                   <Text style={styles.loginText}>Signup with Google</Text>
                 </TouchableOpacity>
         <TouchableOpacity style={styles.loginBtn2}>
           <Text style={styles.loginText}>Signup with facebook</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn3}>
                  <Text style={styles.loginText}>Sign up with apple</Text>
                </TouchableOpacity>
         <TouchableOpacity>
                   <Text style={styles.or}>------------or------------</Text>
                 </TouchableOpacity>
         <TouchableOpacity style={styles.loginBtn4}>
                          <Text style={styles.loginText}>Continue with Phone</Text>
                        </TouchableOpacity>
         <TouchableOpacity>
                            <Text style={styles.or}>by continuing, you agree to our Terms of service and Privacy Policy</Text>
         </TouchableOpacity>
       </View>
     );
   }
  }

  const styles = StyleSheet.create({
   container: {
     flex: 1,
       borderWidth: 2,
     backgroundColor: '#FFFFFF',
     alignItems: 'center',
     justifyContent: 'center',
   },
      image:{

          borderWidth: 2,
          backgroundColor: '#000000',
          height: 200,
          width:200
      },

   logo:{
     fontWeight:"bold",
     fontSize:50,
     color:"#fb5b5a",
     marginTop:40,
     marginBottom:10
   },
   inputView:{
     width:"80%",
     backgroundColor:"#465881",
     borderRadius:25,
     height:50,
     marginBottom:20,
     justifyContent:"center",
     padding:20
   },
   inputText:{
     height:50,
     color:"white"
   },
   or:{
     color:"black",
     fontSize:20

   },
   loginBtn1:{
     width:"80%",
     backgroundColor:"#fb5b5a",
     borderRadius:5,
     height:50,
     alignItems:"center",
     justifyContent:"center",
     marginTop:5,
     marginBottom:1
   },
   loginBtn2:{
       width:"80%",
       backgroundColor:"#61DBFB",
       borderRadius:5,
       height:50,
       alignItems:"center",
       justifyContent:"center",
       marginTop:20,
       marginBottom:1
     },
      loginBtn3:{
           width:"80%",
           backgroundColor:"#000000",
           borderRadius:5,
           height:50,
           alignItems:"center",
           justifyContent:"center",
           marginTop:20,
           marginBottom:1
         },
       loginBtn4:{
                 width:"80%",
                 backgroundColor:"#06038D",
                 borderRadius:5,
                 height:50,
                 alignItems:"center",
                 justifyContent:"center",
                 marginTop:20,
                 marginBottom:20
               },

   loginText:{
     color:"white"
   },

  });


