  import React from "react"
  import {View, Text, Button} from "react-native"
  import Toast from "react-native-toast-message"

  export default function HomeScreen(){
    const showToast = () =>{
        Toast.show({
        type: "success",
        text1:"Hello",
        text2:"this is a test",
        position: "bottom"
    })}
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>
            <Button title="Show Toast" onPress={showToast} />
        </View>
    )

  }
  
  
