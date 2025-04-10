import React, {useState} from "react";
import { Text, View } from "react-native";
import ConfirmationModal from "./ConfirmationModal";
import styles from "./styles";

export default function App() {
  // State to control the modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  return(
    <View style={styles.container}>
      <ConfirmationModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}

      />
      <Text style={styles.text} onPress={toggleModal}>
        Show Modal
      </Text>
    </View>
  )
  
}


