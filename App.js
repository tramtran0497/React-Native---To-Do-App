import React from "react"
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity} from "react-native"
import Task from "./components/Task"

export default function App(){
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.listTasks}>
                    {/* Task is here! */}
            <Task text="Go fishing"/>
            <Task text="Go shopping"/>

          </View>
      </View>

       {/* Write Tasks */}
       <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTasksWrapper} >
        <Text>LALALALAL</Text>
        <TextInput style={styles.input} placeholder="Leave your task here!"/>
        <TouchableOpacity>
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
    
  }
})
 
