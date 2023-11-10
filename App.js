import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';


export default function App() {
  const [task, setTask]= useState();
  const [taskItems, setTaskItems]= useState([]);

  const handleAddTask=()=>{
    Keyboard.dismiss();
    //console.log(task);
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask =(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* <Text>yash!</Text>
      <StatusBar style="auto" /> */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays task</Text>
        <View style={styles.items}>
          {/* this is where thetaska will be present */}
          {
            taskItems.map((item, index)=>{
              return (
              <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item}/>
              </TouchableOpacity>
              
              )
            })
          }
          {/* <Task text={'task 1'} />
          <Task text={'task 2'} /> */}
        </View>
      

      
     
      </View>
      {/* write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS ==="ios" ? "padding" : 'height'}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() =>handleAddTask()}>
        <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items : {
    marginTop:30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    alignItems:'center'

  },
  addText:{},

});
