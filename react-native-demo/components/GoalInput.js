import { View,Button,TextInput,StyleSheet,Modal,Image } from "react-native"
import { useState } from "react"
export default function GoalInput(props){
    const [inputGoalText, setTextGoal] = useState()
    const inputHandler = (text) =>{
        setTextGoal(text)
    }
  
    return(
        <Modal visible={props.visible} animationType="slide">
 <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput value={inputGoalText} style={styles.textInput} placeholder='Write your goal' onChangeText={inputHandler}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title='Add goal' color="#b180f0" onPress={() => {props.addGoal(inputGoalText); setTextGoal('');}}/>
            </View>
            <View style={styles.button}>
             <Button  color="#f31282" title="Cancel" onPress={props.onCancel}/>
            </View>
   
        </View>

      </View>
        </Modal> 
       
   
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
       
   
      },
      textInput:{
        padding: 8,
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%'
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      },
      image:{
        width:100,
        height: 100,
        margin: 20,
      }
      

})