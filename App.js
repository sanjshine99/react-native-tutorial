// view component - container that will wrap multiple components toether
// text - show any text on the screen
// textinput - input component
// button - to show a button
// scrolView - to show a scrollable view of content
// flatList
// pressable - to make any component pressable

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  //ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [value, setvalue] = useState("");
  const [notes, setNotes] = useState([]);

  function handleOnChangeText(getEnteredText) {
    setvalue(getEnteredText);
  }

  function handleOnPressButton() {
    setNotes((currentNotes) => [...currentNotes, value]);
  }

  function handleRemoveItem() {
    let copyListOfNotes = [...notes];
    copyListOfNotes = copyListOfNotes.filter(
      (_, index) => getCurrentIndex !== index
    );
    setNotes(copyListOfNotes);
  }

  return (
    <View
      style={{
        padding: 50,
        paddingHorizontal: 15,
        flex: 1,
      }}
    >
      {/*to render input along with button*/}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleOnChangeText}
          placeholder="Add your note here"
          value={value}
          style={styles.inputButton}
        />
        <Button title="Add Note" color={"#000"} onPress={handleOnPressButton} />
      </View>

      {/*to render input along with button*/}
      <View style={styles.listContainer}>
        <FlatList
          data={notes}
          renderItem={(itemData) => (
            <Pressable onPress={handleRemoveItem}>
              <Text style={styles.listitem}>{itemData.item}</Text>
            </Pressable>
          )}
        />
      </View>

      {/*to render all notes that we created*/}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
  },
  inputButton: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    paddingTop: 30,
    flex: 3,
  },
  listitem: {
    borderRadius: 1,
    borderColor: red,
    backgroundColor: green,
    padding: 20,
    marginBottom: 20,
    color: white,
    fontSize: 20,
  },
});
