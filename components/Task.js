import React from "react"
import { StyleSheet, Text, View, TouchableOpacity} from "react-native"

const Task = ({text}) => {
  return (
    <View style={styles.item}>
    {/* A small square, for users touch informing finish or not */}
      <View style={styles.itemLeftSide}>
        <View style={styles.square}></View>
      </View>
      <Text style={styles.itemText}>{text}</Text>
      <View style={styles.circle} >

      </View>
    </View>
  )
}  

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
  },

  itemLeftSide: {
  },

  square: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#ee9ca7",
    opacity: 0.4,
  },

  itemText: {
    width: 230,
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderColor: "#f7797d",
    borderWidth: 2,
  }

})

export default Task
 
