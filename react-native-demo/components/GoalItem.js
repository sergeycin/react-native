
import { StyleSheet,View,Text,Pressable } from "react-native";

export default function GoalItem(props){
    return( 
        <View style={styles.goalItem}>
             <Pressable android_ripple={{color: '#210644'}} onPress={props.onDelete.bind(this,props.id)}
             style={({pressed}) => pressed && styles.pressedItem}
             >
        <Text style={{color:'white', padding: 6,}}>{props.text}</Text>
        </Pressable>
        </View>
 
    )
}


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
     
        margin: 8,
        color: "white"
      },
      pressedItem:{
        opacity: 0.5,
        backgroundColor: '#210644',
      }
})