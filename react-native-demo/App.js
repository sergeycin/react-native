
import { useState } from 'react';
import {   View,ScrollView, FlatList,Button } from 'react-native';
import GoalItem from './components/GoalItem';
import { styles } from './style';
import GoalInput from './components/GoalInput';
import  {StatusBar} from 'expo-status-bar'
export default function App() {
  const [isModal,SetIsModal] = useState(false)
  const [goals,newGoal] = useState([])


  const addGoal = (inputGoalText) =>{
    newGoal([...goals,{text:inputGoalText,id:Math.random().toString()}])
    endModal()
  } 

  const deleteGoal = (id) =>{
    newGoal(goals =>{
      return goals.filter((goal) => goal.id !== id)
    })
  }
  const endModal = () =>{
    SetIsModal(false )
  }

  const startModal = () =>{
    SetIsModal(true)
  }
  
  return (
    <>
    <StatusBar  style='light'/>
    <View style={styles.container}>
    <Button title='Add new Goal' color="#a065ec" onPress={startModal} />
    {isModal && <GoalInput onCancel={endModal } visible={isModal} addGoal={addGoal} />}
      <View style={styles.goalsContainer }>
      {/* FlatList cуществует для того чтобы когда  у нас будет огромное количество динамических item он не подгружал их все сразу в отличии от компонента скролл */}
      <FlatList data={goals}
       renderItem={(itemData) =>{
      
        return(
         <GoalItem text={itemData.item.text} 
         onDelete={deleteGoal}
         id={itemData.item.id}
         />
        );
      
      }} 

      alwaysBounceVertical={false}
      // keyExtractor нужен для того чтобы если у нас в обьекте нету поля key то flatlist будет считать уникальным ключем id
      keyExtractor={(item,index) => {
        return item.id
      }}
      /> 
      
      </View>

    </View>
    </>
  );
}


