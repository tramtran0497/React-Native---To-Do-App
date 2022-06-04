import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from "react-native"
import Task from "./components/Task"

export default function App(){
  const [task, setTask] = useState()
  const [list, setList] = useState([])

  const handleAddTask = () => {
      setList([...list, task])
      setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...list];
    itemsCopy.splice(index, 1);
    setList(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.listTasks}>
            {/* Task is here! */}
            {
              list.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                    <Task text={item} /> 
                  </TouchableOpacity>
                )
              })
            }
          </View>
      </View>
       {/* Write Tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTasksWrapper} >
        <TextInput style={styles.input} placeholder="Leave your task here!" onChangeText={text => setTask(text)} value={task}/>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffdde1",
    justifyContent: "space-between"
  },

  taskWrapper: {
    
  },

  sectionTitle: {
    paddingTop: 80,
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: "500",
    paddingBottom: 10,
    backgroundColor: "#f64f59",
  },

  listTasks: {
    padding: 20,
    overflow: "scroll",
    
  },

  writeTasksWrapper: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    width: "80%",
    height: 40,
    padding: 10,
    backgroundColor: "#f28482",
    borderRadius: 20,
    marginHorizontal: 10
  },

  addWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    fontSize: 20
  }
})
 
