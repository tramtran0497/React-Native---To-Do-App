import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Task from "./components/Task"

export default function App(){
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.listTasks}>
                    {/* Task is here! */}
            <Task/>
          </View>
      </View>
    </View>
  )
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
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
    paddingTop: 30,
    paddingLeft: 20,
  }
})
 
